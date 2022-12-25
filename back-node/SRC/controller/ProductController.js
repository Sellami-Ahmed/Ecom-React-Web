const { Product } = require("../model/Product");

async function addProduct(req, res, next) {
  try {
    const { name, description, price, category, stock } = req.body;
    if (
      name &&
      description &&
      price &&
      category &&
      stock &&
      typeof price === "number" &&
      Number.isInteger(stock)
    ) {
      const product = new Product({
        name: name,
        description: description,
        price: price,
        category: category,
        stock: stock,
      });
      product.save().then(() =>
        res.status(201).json({
          status: 201,
          message: "Product created.",
        })
      );
    } else {
      res.status(400).json({ status: 400, message: "Check your data" });
    }
  } catch (err) {
    res.status(500).json({ status: 400, message: err.message });
  }
}
async function updateProduct(req, res, next) {
  try {
    const id = req.params.id;
    const { name, description, price, category, stock } = req.body;
    if (
      name &&
      description &&
      price &&
      category &&
      stock &&
      typeof price === "number" &&
      typeof stock === "number" &&
      id
    ) {
      await Product.findByIdAndUpdate(id, {
        name: name,
        description: description,
        price: price,
        category: category,
        stock: stock,
      });

      res.status(203).json({
        status: 203,
        message: "Product updated.",
      });
    } else {
      res.status(400).json({ status: 400, message: "Check your data" });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
}
async function getProductById(req, res, next) {
  try {
    const id = req.params.id;
    if (id) {
      const product = await Product.findById(id);
      res.status(200).json({
        status: 200,
        data: product,
      });
    } else {
      res.status(400).json({ status: 400, message: "Check your data" });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
}
async function getAllProduct(req, res, next) {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: 200,
      data: products,
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
}
exports.addProduct = addProduct;
exports.getAllProduct = getAllProduct;
exports.getProductById = getProductById;
exports.updateProduct = updateProduct;
