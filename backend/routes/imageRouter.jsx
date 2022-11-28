const express = require("express");
const imgRouter = express.Router();
const {
	deleteImg,
	updateImg,
	uploadImg,
} = require("../controllers/imageControllers.jsx");

//routers
imgRouter.route("/img").post(uploadImg);
imgRouter.route("/img/:id").delete(deleteImg).patch(updateImg);
module.exports = imgRouter;
