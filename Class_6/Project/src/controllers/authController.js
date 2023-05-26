const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models');

exports.login = (req, res) => {
  const { id, password } = req.body;

  if (id === User.id && password === User.password) {
    token = jwt.sign(
      { id: id, password: password },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '1h',
      }
    );

    res.status(200).json({
      success: true,
      data: {
        token: token,
      },
    });
  }
};

exports.restrictedView = (_, res) => {
  res.status(200).send('Confidential View');
};
