const express = require("express");
const imgRouter = express.Router();
const { deleteImg, uploadImg } = require("../controllers/imageControllers.jsx");

//routers
imgRouter.route("/img/upload").post(uploadImg);
imgRouter.route("/img/delete").post(deleteImg);
module.exports = imgRouter;
