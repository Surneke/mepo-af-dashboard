const express = require('express');
const productsRouter = express.Router();
const { addProducts, deleteProduct, getProducts,updateProduct} = require('../controllers/productController.jsx');
const { auth } = require('../middleware/auth.jsx');

//routers
productsRouter.route('/product').get(getProducts).post(auth, addProducts);
productsRouter.route('/product/:id').patch(updateProduct).delete(deleteProduct);
module.exports = productsRouter;
