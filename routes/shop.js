const express =  require('express');
const path = require('path');

const router = express.Router();
const adminData = require('./admin');

router.get("/", (req, res, next) => {
  console.log(adminData.products);
  /* using static html page */
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));

  /* using templating engine */
  const products = adminData.products;
  res.render('shop', {prods: products, docTitle: 'Shop'});
});

module.exports = router;
