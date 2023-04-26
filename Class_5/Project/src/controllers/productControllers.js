const { Product } = require('../models/products');
const { schemaCustoms, schemaFull } = require('../Schema/joiSchema');
const Joi = require('Joi');

const createProduct = (req, res) => {
  const result = schemaCustoms.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error);
  }
  const item = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    Available_Units: req.body.Available_Units,
    category: req.body.category,
  };

  item
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const getAllProducts = (_, res) => {
  Product.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const getProductById = (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const result = schemaFull.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error);
  }

  Product.updateOne(
    { _id: id },
    { $set: { name, description, price, Available_Units, category } }
  )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  Product.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
