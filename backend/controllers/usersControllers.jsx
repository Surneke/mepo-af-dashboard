const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { UserShema, UserModel } = require("../model/usersModel.jsx");

const createAccessToken = (userId) => {
  return jwt.sign(userId, process.env.ACCESS_TOKEN, { expiresIn: "1d" });
};

const createRefreshToken = (userId) => {
  return jwt.sign(userId, process.env.REFRESH_TOKEN, { expiresIn: "2d" });
};
exports.getUsers = async (req, res) => {
  try {
    const { role } = req.query;
    if (role) {
      const allUsers = await UserModel.find({
        role: {
          $in: role === "User" ? ["User"] : ["Admin"],
        },
      });
      return res.status(200).json({ allUsers });
    } else {
      const allUsers = await UserModel.find();
      return res.status(200).json({ allUsers });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.addAdmin = async (req, res) => {
  try {
    const { role } = req.body;
    const adminUser = await UserModel.findByIdAndUpdate(req.params.id, {
      role,
    });
    res.status(200).json({ msg: adminUser });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: `${req.params.id} item deleted` });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const errs = await handleErr(email, password);
    if (Object.keys(errs).length > 0) {
      return res.status(400).json({ msg: errs });
    }
    const user = await UserModel.findOne({ email });
    const access_token = createAccessToken({ id: user._id });
    const refresh_token = createRefreshToken({ id: user._id });
    res.cookie("refreshToken", refresh_token, {
      httpOnly: true,
      path: `http://${req.headers.host}/api/refresh_token`,
      maxAge: 3 * 24 * 3600 * 1000,
    });
    res.status(200).json({ user, token: access_token, msg: "logged in" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const rfToken = req.cookies.refreshToken;
    if (!rfToken) {
      res.status(400).json({ msg: "login hiine u" });
    }
    jwt.verify(rfToken, process.env.REFRESH_TOKEN, async (err, result) => {
      if (err) return res.status(400).json({ msg: "login hiine u" });
      const user = await UserModel.findById(result.id);
      const access_token = createAccessToken({ id: user._id });
      res.status(200).json({ user, token: access_token });
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const handleErr = async (email, password) => {
  const errs = {};

  const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email) {
    errs.email = "emaile oruulna u";
  } else if (!email.match(emailValidator)) {
    errs.email = "huchintei mail oruulna uu";
  } else if (email) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      errs.email = " burtgelgu mail bn";
    } else {
      const passMatch = await bcrypt.compare(password, user.password);
      if (!passMatch) {
        errs.password = "password buruu bn";
      }
    }
  }
  if (!password) {
    errs.password = "password oruulna u";
  }
  return errs;
};
