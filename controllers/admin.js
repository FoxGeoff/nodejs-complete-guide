const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  /* DANGER: this data is shared across ALL node users :( */
  const product = new Product(
    req.body.title,
    req.body.imageUrl,
    req.body.description,
    req.body.price
  );
  product.save();
  res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/edit-product",
  });
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    /* using templating engine */
    res.render("admin/products", {
      prods: products,
      pageTitle: "Product Administration",
      path: "/admin/products",
    });
  });
};
