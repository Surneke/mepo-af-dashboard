const express = require("express");
const usersRouter = express.Router();
const { getUsers, addAdmin, deleteUser, login, refreshToken } = require("../controllers/usersControllers.jsx");

//routers
usersRouter.route("/users").get(getUsers);
usersRouter.post("/login", login);
usersRouter.get("/refresh_token", refreshToken )
usersRouter.route("/users/:id").delete(deleteUser).patch(addAdmin);
module.exports = usersRouter;
