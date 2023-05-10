const { Character } = require('../models');
const Joi = require('Joi');

const schemaCustom = Joi.object({
  id: Joi.number().min(1).max(1000).required(),
  name: Joi.string().min(4).max(100).required(),
  lastname: Joi.string().min(4).max(100).required(),
  email: Joi.string().min(10).max(100).required(),
  password: Joi.string().min(1).max(1000).required(),
  birthday: Joi.date().required(),
  address: Joi.string().min(1).max(1000).required(),
  nationalId: Joi.number().min(1).max(1000).required(),
});

exports.getAllCharacters = async (req, res, next) => {
  const { offset, limit } = req.query;
  try {
    const character = await Character.findAll({
      offset,
      limit,
    });
    res.json(character);
  } catch (error) {
    next(error);
  }
};

exports.createCharacter = async (req, res, next) => {
  const result = await schemaCustom.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error);
  }
  try {
    const character = await Character.create(req.body);
    res.status(201).json(character);
  } catch (error) {
    next(error);
  }
};

exports.getCharacterById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const character = await Character.findOne({ where: { id } });
    res.status(200).json(character);
  } catch (error) {
    next(error);
  }
};

exports.deleteById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const character = await Character.destroy({ where: { id } });
    res.status(200).json(character);
  } catch (error) {
    next(error);
  }
};
