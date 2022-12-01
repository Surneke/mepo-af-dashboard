const { UserModel } = require( "../model/usersModel.jsx")
const { AddressModel } = require( "../model/addressModel.jsx")

const addValidator = (country, citySoum, zipPostcode, stateProvince, apartmentSuite) => {
  const errors = {};
  if (!country) {
    errors.country = "Please fill out this field.";
  }
  if (!citySoum) {
    errors.citySoum = "Please fill out this field.";
  }
  if (!zipPostcode) {
    errors.zipPostcode = "Please fill out this field.";
  }
  if (!stateProvince) {
    errors.stateProvince = "Please fill out this field.";
  }
  if (!apartmentSuite) {
    errors.apartmentSuite = "Please fill out this field.";
  }
  return errors;
};

exports.addressCtrl = {
  createNewAddress: async (req, res) => {
    try {
      const { detail, country, citySoum, zipPostcode, stateProvince, apartmentSuite } = req.body;
      const err = addValidator(country, citySoum, zipPostcode, stateProvince, apartmentSuite);
      if (Object.keys(err).length > 0) return res.status(400).json({ msg: err });
      const newAddress = new AddressModel({ owner: req.user?._id, detail, country, citySoum, zipPostcode, stateProvince, apartmentSuite });
      await newAddress.save();
      await UserModel.findByIdAndUpdate(req.user._id, { address: newAddress._id });
      res.status(200).json({ msg: "Address created" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateAddress: async (req, res) => {
    try {
      const { detail, country, citySoum, zipPostcode, stateProvince, apartmentSuite } = req.body;
      const err = addValidator(country, citySoum, zipPostcode, stateProvince, apartmentSuite);
      if (Object.keys(err).length > 0) return res.status(400).json({ msg: err });
      await AddressModel.findOneAndUpdate({ owner: req.user?._id }, { detail, country, citySoum, zipPostcode, stateProvince, apartmentSuite });
      res.status(200).json({ msg: "Address updated." });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
