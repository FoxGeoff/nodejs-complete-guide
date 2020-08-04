const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product", {
      pageTitle: "Add Product",
      path: "/admin/add-product",
    });
  };
  
  exports.postAddProduct = (req, res, next) => {
    /* DANGER: this data is shared across ALL node users :( */
    const product = new Product(req.body.title);
    product.save();
  
    res.redirect("/");
  };

  exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
      /* using templating engine */
      res.render("admin/products", {
        prods: products,
        pageTitle: "Products Administration",
        path: "/admin/products",
      });
    });
  };
