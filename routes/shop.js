const express = require("express");

const router = express.Router();

const productsController = require("../controllers/products");
const cartController = require("../controllers/cart");

router.get("/", productsController.getProducts);
router.get("/cart", cartController.getProducts);
router.get("/productdetails", productsController.getProductDetails);

module.exports = router;
