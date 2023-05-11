const { Character } = require('../models');
const Joi = require('Joi');
const crypto = require('crypto');

const schemaCustom = Joi.object({
  fullname: Joi.string().min(4).max(100).required(),
  serie: Joi.string().min(4).max(1000).required(),
  studio: Joi.string().min(10).max(1000).required(),
  author: Joi.string().min(1).max(10000).required(),
  firstappearance: Joi.date().required(),
  role: Joi.string().min(1).max(1000).required(),
  episodes: Joi.number().min(1).max(1000).required(),
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
    const character = await Character.create({
      id: crypto.randomUUID(),
      fullname: req.body.fullname,
      serie: req.body.serie,
      studio: req.body.studio,
      author: req.body.author,
      firstappearance: req.body.firstappearance,
      role: req.body.role,
      episodes: req.body.episodes,
    });
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

exports.updateCharacterById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const character = await Character.update(req.body, {
      returning: true,
      where: {
        id,
      },
    });
    res.json(character);
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
