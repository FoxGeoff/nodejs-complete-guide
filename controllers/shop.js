const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    /* using templating engine */
    res.render("shop/products-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
}

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    /* using templating engine */
    res.render("shop/products", {
      prods: products,
      pageTitle: "Products",
      path: "/products",
    });
  });
}

exports.getIndex = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    /* using templating engine */
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
}

exports.getCart = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    /* using templating engine */
    res.render("shop/cart", {
      prods: products,
      pageTitle: "Shopping Cart",
      path: "/cart",
    });
  });
}

exports.getCheckout = (re, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
}