const express = require("express");
const ordersRouter = express.Router();
const {
	getOrders,
	createOrder,
	updateOrder,
	deleteOrder,
	getOrder,
} = require("../controllers/ordersControllers.jsx");

//routers
ordersRouter.route("/order").get(getOrders);
ordersRouter
	.route("/order/:id")
	.get(getOrder)
	.patch(updateOrder)
	.delete(deleteOrder);
module.exports = ordersRouter;
