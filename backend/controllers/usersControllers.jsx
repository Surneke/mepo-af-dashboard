const { UserShema, UserModel } = require("../model/usersModel.jsx");

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
