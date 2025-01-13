const express = require('express');
const jwt = require ('jsonwebtoken');
const router = express.Router();
const userController = require('../controllers/user-auth')
const userAuth = require('../middlewares/user-middleware')
const orderController = require('../controllers/user-order')
const productController = require('../controllers/product')
// const multer = require("multer");

router.post('/customer',userController.userReg)
router.post('/customer/login',userController.userLogin)
router.get('/customer',userAuth,userController.getAllUser)
router.put('/customer:id', userController.updateUser)
router.delete('/customer:id', userController.deleteUser)
router.get("/test", userAuth, (req, res) => {
    res.send("User authorized")
  })
router.post('/order', orderController.createOrder)
router.get('/order', orderController.getOrders)
router.post('/product', productController.createProduct);
router.get('/product', productController.getProducts);

// import multer from "multer";

// import auth from "./user-auth.js";
// import order from "./user-order.js";
// import product from "./product.js";
// const upload = multer();

// const api = Router().use(auth).use(order).use(product);

// // router.get("/r", (req, res) => {
// //   res.send("Hello, This is the about page");
// // });

module.exports = router;