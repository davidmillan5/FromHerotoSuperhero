const { Product } = require('../models');
const { productSchema } = require('../Schema/productSchema');

const createProduct = async (req, res) => {
  const result = productSchema.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error);
  }
  const product = await new Product(req.body).save();

  res.json(product);
};

const getAllProducts = async (_, res) => {
  const products = await Product.find();
  res.json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const productById = await Product.findById(id);
  res.json(productById);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const result = productSchema.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error);
  }
  const product = await Product.findByIdAndUpdate(id, req.body);
  res.json(product);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOneAndRemove(id, { new: true });
  res.json({ message: `Product ${product.title} has been deleted` });
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
