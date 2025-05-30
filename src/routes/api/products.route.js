const express = require('express');
const router = express.Router();
const path = require('path');
const Products = require('../../models/products.model.js')
const { addProduct, getProducts, getProduct, updateProduct, deleteProduct} = require('../../controllers/products.controller.js')


router.route('/')
.post(addProduct)
.get(getProducts)

router.route('/:id')
.get(getProduct)
.put(updateProduct)
.delete(deleteProduct)

module.exports = router;
