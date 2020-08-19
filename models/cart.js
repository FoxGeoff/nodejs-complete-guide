const fs = require("fs");
const path = require("path");
const Product = require("./product");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class {
  static addProduct(id, productPrice) {
    /* Fetch the previous cart */
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      /* Analyze the cart => Find existing product  */
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      /* Add new product/increase quantity */
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      /* Add new product or increase quantity */
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }

  /*   
      1- Remove from Cart
      2- Adjust cart priceTotal 
  */
  static deleteProduct(prodId, prodPrice) {
    /* Fetch the previous cart */
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return;
      }

      const cart = JSON.parse(fileContent);
      const updatedCart = cart;

      /* debug */
      console.log(`Cart content: }` + JSON.stringify(updatedCart));

      /* Analyze the cart => Find product to be deleted */
      const prodCartIndex = updatedCart.products.findIndex(
        (prod) => prod.id === prodId
      );

      /* debug */
      console.log(`prodCartIndex: ${prodCartIndex}`);
/*
      Product.findIndex(id, prodDelete); //
      //* extract the deleted product's price and quatity
      const prodDeletePrice = prodDelete.price;
      const prodDeleteQty = prodDelete.qty;
      //* reduce cart price by prod.price * prod.qty
      updatedCart.totalPrice =
        updatedCart.totalPrice - prodDeletePrice * prodDeleteQty;
      //* remove the deleted product from the cart
      updatedCart.products = updatedCart.products.filter(
        (prod) => prod.id !== id
      );
      //* write the cart
      fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
        console.log(err);
      }); */
    });
  }
};
