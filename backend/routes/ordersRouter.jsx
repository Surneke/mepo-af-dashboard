const express = require('express')
const ordersRouter = express.Router();
const { getOrders, createOrder, updateOrder, deleteOrder, getOrder } = require('../controllers/ordersControllers.jsx')

//routers
ordersRouter.route('/').get(getOrders).post(createOrder);
ordersRouter.route('/:id').get(getOrder).put(updateOrder).delete(deleteOrder);
module.exports = ordersRouter;
