const express = require("express");
const path = require("path");

const rootDir = require("../util/path");
const { exception } = require("console");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));

  // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));

  res.render("add-product", { pageTitle: "Add Product" });
});
// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  // console.log(JSON.stringify(req.body));

  /* DANGER: this data is shared across ALL node users :( */
  products.push({ title: req.body.title });
  res.redirect("/admin");
});

module.exports = {
  routes: router,
  products: products,
};

// exports.routes = router;
// exports.products = products;
