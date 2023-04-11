'use strict';

const port = process.env.PORT || 8000,
  express = require('express'),
  app = express(),
  fs = require('fs'),
  Joi = require('joi'),
  path = require('path'),
  databaseModule = require('./modules/databaseCreator.js'),
  appendModule = require('./modules/appendFile'),
  databaseName = 'database',
  objectName = 'videoGames';

app.use(express.json());
databaseModule.createDatabase(databaseName, objectName);

// Joi Schema

const schema = Joi.object({
  id: Joi.number().min(1).max(100).required(),
  name: Joi.string().min(3).required(),
  description: Joi.string().min(10).max(100).required(),
  price: Joi.number().required(),
  Available_Units: Joi.number().required(),
  category: Joi.string().min(5).max(15).required(),
});

const readFile = async () => {
  //Local Variables

  const filePath = path.join(__dirname, `${databaseName}.txt`),
    data = await fs.promises.readFile(filePath, 'utf-8'),
    items = JSON.parse(data);

  //Checks The database was created

  app.get('/', (req, res) => {
    res.send('The Database is online...');
  });

  //Check The Database and what is in it

  app.get('/api/v1/products', (req, res) => {
    res.send(items.videoGames);
  });

  // Post a new Item

  app.post('/api/v1/products', (req, res) => {
    const result = schema.validate(req.body);
    if (result.error) {
      res.status(400).send(result.error);
      return;
    }
    const item = {
      id: items.videoGames.length + 1,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      Available_Units: req.body.Available_Units,
      category: req.body.category,
    };
    items.videoGames.push(item);
    const stringPro = JSON.stringify(items);
    res.json(items);
    console.log(stringPro);
    appendModule.appendFile(stringPro, databaseName);
  });

  // Get Item By Id

  app.get('/api/v1/products/:productId', (req, res) => {
    const { productId } = req.params,
      parseItem = parseInt(productId),
      itemIndex = items.videoGames
        .map((element) => element.id)
        .indexOf(parseItem);

    if (itemIndex + 1 === parseItem) {
      res.send(items.videoGames[itemIndex]);
    } else {
      res.status(404).send('The item with the given ID was not found');
    }
  });

  //Patch

  app.patch('/api/v1/products/:productId', (req, res) => {
    const { productId } = req.params,
      parseItem = parseInt(productId),
      itemIndex = items.videoGames
        .map((element) => element.id)
        .indexOf(parseItem);

    const result = schema.validate(req.body);
    if (result.error) {
      res.status(400).send(result.error);
      return;
    }

    if (itemIndex + 1 === parseItem) {
      const item = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        Available_Units: req.body.Available_Units,
        category: req.body.category,
      };
      items.videoGames.splice(itemIndex, 1, item);
      res.send(items.videoGames);
    } else {
      res.status(404).send('The item with the given ID was not found');
    }

    const itemString = JSON.stringify(items);
    appendModule.appendFile(itemString, databaseName);
  });

  // Delete

  app.delete('/api/v1/products/:productId', (req, res) => {
    const { productId } = req.params,
      parseItem = parseInt(productId),
      itemIndex = items.videoGames
        .map((element) => element.id)
        .indexOf(parseItem);

    if (itemIndex + 1 === parseItem) {
      items.videoGames.splice(itemIndex, 1);
      res.send(items.videoGames);
    } else {
      res.send(`The Item Id ${parseItem} doesn't exists....`);
    }

    const itemString = JSON.stringify(items);
    appendModule.appendFile(itemString, databaseName);
  });
};

readFile();

app.listen(port, () => {
  console.log(`Listening in http://localhost:${port}`);
});
