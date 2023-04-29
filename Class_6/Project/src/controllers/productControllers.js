const productSchema = require('../models/products');
// const { schemaCustoms, schemaFull } = require('../Schema/joiSchema');
const Joi = require('Joi');

const schemaCustom = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).max(1000).required(),
  price: Joi.number().min(1).max(1000).required(),
  Available_Units: Joi.number().min(1).max(1000).required(),
  category: Joi.string().min(5).max(15).required(),
});

const createProduct = (req, res) => {
  const result = schemaCustom.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error);
  }
  const product = productSchema(req.body);

  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const getAllProducts = (_, res) => {
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const getProductById = (req, res) => {
  const { id } = req.params;
  productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const result = schemaCustom.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error);
  }
  const { title, description, price, Available_Units, category } = req.body;
  productSchema
    .updateOne(
      { _id: id },
      { $set: { title, description, price, Available_Units, category } }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  productSchema
    .deleteOne({ _id: id })
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
