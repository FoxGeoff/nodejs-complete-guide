const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
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

  res.redirect("/admin");
};

exports.getProducts = (req, res, next) => {
  /* using static html page */
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));

  const products = Product.fetchAll();

  /* using templating engine */
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/admin" });
};
