const { Product } = require('../models');
const Joi = require('Joi');

const schemaCustom = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).max(1000).required(),
  price: Joi.number().min(1).max(1000).required(),
  Available_Units: Joi.number().min(1).max(1000).required(),
  category: Joi.string().min(5).max(15).required(),
});

const createProduct = async (req, res) => {
  const result = schemaCustom.validate(req.body);
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
  const result = schemaCustom.validate(req.body);
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
