const express = require("express");
const router = express.Router();
const ShopController = require("../controllers/shop");

/* Remember the order matters */
router.get("/", ShopController.getIndex);
router.get("/products", ShopController.getProducts);
router.get("/products/:productId", ShopController.getProduct);
router.get("/cart", ShopController.getCart);
router.get("/orders", ShopController.getOrders);
router.get("/checkout", ShopController.getCheckout);

module.exports = router;
