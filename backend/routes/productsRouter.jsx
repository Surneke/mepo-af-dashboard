const express = require('express');
const productsRouter = express.Router();
const { addProducts, deleteProduct, getProducts,updateProduct} = require('../controllers/productController.jsx');

//routers
productsRouter.route('/product').get(getProducts).post(addProducts);
productsRouter.route('/product/:id').patch(updateProduct).delete(deleteProduct);
module.exports = productsRouter;
