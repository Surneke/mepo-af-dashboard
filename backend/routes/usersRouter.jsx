const express = require("express");
const usersRouter = express.Router();
const {
	getUsers,
	addAdmin,
	deleteUser,
} = require("../controllers/usersControllers.jsx");

//routers
usersRouter.route("/users").get(getUsers);
usersRouter.route("/users/:id").delete(deleteUser).patch(addAdmin);
module.exports = usersRouter;
