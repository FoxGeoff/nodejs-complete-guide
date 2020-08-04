const express = require("express");

const router = express.Router();

const ShopController = require("../controllers/shop");
const CartController = require("../controllers/shop");

router.get("/", ShopController.getProducts);
router.get("/products", ShopController.getProductsUser);
router.get("/cart", CartController.getProducts);
router.get("/checkout");

module.exports = router;
