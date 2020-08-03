const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  // console.log(JSON.stringify(req.body));

  /* DANGER: this data is shared across ALL node users :( */
  // products.push({ title: req.body.title });

  const product = new Product(req.body.title);
  product.save();

  res.redirect("/");
};

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
