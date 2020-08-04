const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    /* using templating engine */
    res.render("shop/cart", {
      prods: products,
      pageTitle: "Shopping Cart",
      path: "/cart",
    });
  });
};
