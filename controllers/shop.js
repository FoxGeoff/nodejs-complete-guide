const Product = require("../models/product");

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
exports.getProduct = (req,res, next) => {
  const prodId = req.params.productId;
  /* debug */
  console.log(`Product Id: ${prodId}`);

  res.redirect("/");
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

exports.getOrders = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    /* using templating engine */
    res.render("shop/orders", {
      prods: products,
      pageTitle: "Your Orders",
      path: "/orders",
    });
  });
}

exports.getCheckout = (re, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
}