const Joi = require('Joi');

const schemaFull = Joi.object({
  id: Joi.number().min(1).max(100).required(),
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).max(100).required(),
  price: Joi.number().min(1).max(1000).required(),
  Available_Units: Joi.number().min(1).max(1000).required(),
  category: Joi.string().min(5).max(15).required(),
});

const schemaCustom = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).max(100).required(),
  price: Joi.number().min(1).max(1000).required(),
  Available_Units: Joi.number().min(1).max(1000).required(),
  category: Joi.string().min(5).max(15).required(),
});

module.exports.joiSchema = { schemaFull, schemaCustom };
