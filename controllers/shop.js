const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    /* using templating engine */
    res.render("shop/products", {
      prods: products,
      pageTitle: "Products",
      path: "/products",
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;

  /* debug async using cb */
  Product.findById(prodId, (product) => {
    console.log(`Returning Product: ${JSON.stringify(product)}`);
    /* using templating engine */
    res.render("shop/product-details", {
      product: product,
      pageTitle: "Product Details",
      path: `/products/${product.id}`,
    });
  });
};

exports.getIndex = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    /* using templating engine */
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    /* using templating engine */
    res.render("shop/cart", {
      prods: products,
      pageTitle: "Shopping Cart",
      path: "/cart",
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;

  /* debug */
  console.log(prodId);

  Product.findById(prodId, (product) => {
    const newProduct = product;
    Cart.addProduct(prodId, newProduct.price);
  });

  res.redirect("/cart");
};

exports.getOrders = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    /* using templating engine */
    res.render("shop/orders", {
      prods: products,
      pageTitle: "Your Orders",
      path: "/orders",
    });
  });
};

exports.getCheckout = (re, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
