const express = require("express");

const router = express.Router();

const productsController = require("../controllers/products");

// /admin/add-product => GET
router.get("/add-product", productsController.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", productsController.postAddProduct);

module.exports = router;

/*
module.exports = {
  routes: router,
  products: products,
};
*/

// exports.routes = router;
// exports.products = products;
