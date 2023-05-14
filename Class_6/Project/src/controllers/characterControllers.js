const { Character } = require('../models');
const crypto = require('crypto');
const { characterSchema } = require('../Schema/characterSchema');

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
  const result = await characterSchema.validate(req.body);
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
  const result = characterSchema.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error);
  }
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
