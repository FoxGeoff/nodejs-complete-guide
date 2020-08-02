const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
    // console.log(JSON.stringify(req.body));
  
    /* DANGER: this data is shared across ALL node users :( */
    products.push({ title: req.body.title });
    res.redirect("/admin");
}