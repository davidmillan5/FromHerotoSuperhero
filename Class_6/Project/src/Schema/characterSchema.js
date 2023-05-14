const Joi = require('Joi');

exports.characterSchema = Joi.object({
  fullname: Joi.string().min(4).max(100).required(),
  serie: Joi.string().min(4).max(1000).required(),
  studio: Joi.string().min(10).max(1000).required(),
  author: Joi.string().min(1).max(10000).required(),
  firstappearance: Joi.date().required(),
  role: Joi.string().min(1).max(1000).required(),
  episodes: Joi.number().min(1).max(1000).required(),
});
