

const express = require( "express")
const { auth } = require( "../middleware/auth.jsx")
const { addressCtrl } = require( "../controllers/addressCtrl.jsx")
const addressRouter = express.Router()

addressRouter.route("/address").patch(auth, addressCtrl.updateAddress).post(auth, addressCtrl.createNewAddress);
module.exports= addressRouter 