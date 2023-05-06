const { User } = require('../models');

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
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
