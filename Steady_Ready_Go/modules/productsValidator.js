'use strict';

const Joi = require('joi');

function validateCourse(product) {
  const schema = {
    id: Joi.number().integer().require(),
    name: Joi.string().min(3).required(),
    description: Joi.string().min(10).require(),
    price: Joi.number().integer().require(),
    units: Joi.number().integer().require(),
    category: Joi.string().min(6).require(),
  };

  return Joi.ValidationError(product, schema);
}

module.exports.validateCourse = validateCourse;
