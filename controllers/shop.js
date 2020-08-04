const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  /* using static html page */
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));

  const products = Product.fetchAll((products) => {
    /* using templating engine */
    res.render("shop/products-list", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getProductsUser = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    /* using templating engine */
    res.render("shop/products", {
      prods: products,
      pageTitle: "Products",
      path: "/products",
    });
  });
};




