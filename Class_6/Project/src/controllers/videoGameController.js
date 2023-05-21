const { videoGameSchema } = require('../Schema/videoGameSchema');
const db = require('../config/firebaseConnection');
const crypto = require('crypto');
const COLLECTION = 'videogames';
const videoGamesDb = db.collection(COLLECTION);

exports.createVideoGame = async (req, res, next) => {
  const result = videoGameSchema.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error);
  }
  try {
    const videoGamesModel = {
      id: crypto.randomUUID(),
      title: req.body.title,
      console: req.body.console,
      studio: req.body.studio,
      release: req.body.release,
      price: req.body.price,
      units: req.body.units,
    };
    const data = await videoGamesDb
      .doc(videoGamesModel.id)
      .set(videoGamesModel);
    res.send(videoGamesModel);
  } catch (error) {
    res.send(error);
  }
};

exports.getAllGames = async (req, res, next) => {
  try {
    const data = await videoGamesDb.get();
    let responseArray = [];

    data.forEach((doc) => {
      responseArray.push(doc.data());
    });
    res.json(responseArray);
  } catch (error) {
    res.send(error);
  }
};

exports.getVideoGameById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const videoGame = db.collection(COLLECTION).doc(id);
    const data = await videoGame.get();
    res.json(data.data());
  } catch (error) {
    res.send(error);
  }
};

exports.updateVideoGame = async (req, res, next) => {
  const { id } = req.params;
  const result = videoGameSchema.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error);
  }
  try {
    const videoGameUpdated = db.collection(COLLECTION).doc(id);
    const update = await videoGameUpdated.update({
      title: req.body.title,
      console: req.body.console,
      studio: req.body.studio,
      release: req.body.release,
      price: req.body.price,
      units: req.body.units,
    });
    console.log(update);
    res.json(update);
  } catch (error) {
    res.send(error);
  }
};

exports.deleteVideoGame = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await videoGamesDb.doc(id).delete();
    res.send(data.data());
    console.log(`video game erased`);
  } catch (error) {
    res.json(error);
  }
};
