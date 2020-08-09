const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin");

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// /admin/products => GET
router.get("/products", adminController.getProducts);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

// /admin/edit-product => GET
router.get("/edit-product/:productId", adminController.getEditProduct);

module.exports = router;

/*
module.exports = {
  routes: router,
  products: products,
};
*/

// exports.routes = router;
// exports.products = products;
