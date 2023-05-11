const { User } = require('../models');
const Joi = require('Joi');

const schemaCustom = Joi.object({
  name: Joi.string().min(4).max(100).required(),
  lastname: Joi.string().min(4).max(100).required(),
  email: Joi.string().min(10).max(100).required(),
  password: Joi.string().min(1).max(1000).required(),
  birthday: Joi.date().required(),
  address: Joi.string().min(1).max(1000).required(),
  nationalId: Joi.number().min(1).max(1000).required(),
});

exports.getAllUsers = async (req, res, next) => {
  const { offset, limit } = req.query;
  try {
    const users = await User.findAll({
      offset,
      limit,
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  const result = await schemaCustom.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error);
  }
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { id } });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

exports.updateById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.update(req.body, {
      returning: true,
      where: {
        id,
      },
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.deleteById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.destroy({ where: { id } });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
