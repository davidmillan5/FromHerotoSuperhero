const Joi = require('Joi');

exports.videoGameSchema = Joi.object({
  title: Joi.string().min(5).max(100).required(),
  console: Joi.string().min(5).max(100).required(),
  studio: Joi.string().min(5).max(100).required(),
  release: Joi.date().required(),
  price: Joi.number().min(10).required(),
  units: Joi.number().min(1).max(100).required(),
});
