const { User } = require('../models');
const { userSchema } = require('../Schema/userSchema');

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
  const result = userSchema.validate(req.body);
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
  const result = userSchema.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error);
  }
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
