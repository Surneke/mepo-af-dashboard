const express = require("express");
const { auth } = require("../middleware/authAdmin.jsx")
const { addressController } = require("../controllers/addressControllers.jsx")
const addressRouter = express.Router();

addressRouter.router("/address").patch(auth, addressController.updateAddress).post(auth, addressController.createNewAddress);
module.exports = addressRouter;