const Joi = require('Joi');

exports.userSchema = Joi.object({
  name: Joi.string().min(4).max(100).required(),
  lastname: Joi.string().min(4).max(100).required(),
  email: Joi.string().min(10).max(100).required(),
  password: Joi.string().min(1).max(12).required(),
  birthday: Joi.date().required(),
  address: Joi.string().min(1).max(10000).required(),
  nationalId: Joi.number().min(1).max(100000).required(),
});
