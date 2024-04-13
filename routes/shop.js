const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId' , shopController.getProduct)  //the ":" specifies that anything that comes there will dynamic 

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart)

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

router.post('/create-order' ,shopController.postOrder)

router.post('/cart-delete-item', shopController.postCartDeleteProduct)

module.exports = router;