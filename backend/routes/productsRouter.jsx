const express = require('express');
const productsRouter = express.Router();
const { addProducts, deleteProduct, getProducts,updateProduct,getProduct} = require('../controllers/productController.jsx');

//routers
productsRouter.route('/').get(getProducts).post(addProducts);
productsRouter.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);
module.exports = productsRouter;
