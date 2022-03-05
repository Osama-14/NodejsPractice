const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  try {
    res.render("form", { title: "add product form" });
  } catch (e) {
    res.send("");
  }
};

exports.postAddProduct = (req, res) => {
  try {
    const product = new Product(req.body.title);

    product.save();
    res.send("saved");
  } catch (e) {
    res.send("");
  }
};

exports.fetchAll = (req, res) => {
  try {
    const products = Product.fetchAll();
    res.render("products", { products });
  } catch (e) {
    res.send("");
  }
};
