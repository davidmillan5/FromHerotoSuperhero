'use strict';

const port = process.env.PORT || 8000,
  express = require('express'),
  app = express(),
  fs = require('fs'),
  Joi = require('joi'),
  path = require('path'),
  databaseModule = require('./modules/databaseCreator.js'),
  appendModule = require('./modules/appendFile'),
  databaseName = 'database';

app.use(express.json());
databaseModule.createDatabase(databaseName);

// Joi Schema

const schemaFull = Joi.object({
  id: Joi.number().min(1).max(100).required(),
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).max(100).required(),
  price: Joi.number().min(1).max(1000).required(),
  Available_Units: Joi.number().min(1).max(1000).required(),
  category: Joi.string().min(5).max(15).required(),
});

const schemaCustom = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).max(100).required(),
  price: Joi.number().min(1).max(1000).required(),
  Available_Units: Joi.number().min(1).max(1000).required(),
  category: Joi.string().min(5).max(15).required(),
});

const readFile = async () => {
  //Local Variables

  const filePath = path.join(__dirname, `${databaseName}.txt`),
    data = await fs.promises.readFile(filePath, 'utf-8'),
    items = JSON.parse(data);

  // Logging Middleware

  app.use((req, res, next) => {
    console.log(`${req.method} Request Received`);
    next();
  });

  //Checks The database was created

  app.get('/', (req, res) => {
    res.send('The Database is online...');
  });

  //Check The Database and what is in it

  app.get('/api/v1/products', (req, res) => {
    res.send(items);
  });

  // Post a new Item

  app.post('/api/v1/products', (req, res, next) => {
    const result = schemaCustom.validate(req.body);
    if (result.error) {
      return res.status(400).send(result.error);
    }
    const item = {
      id: Math.round(Math.random() * 100),
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      Available_Units: req.body.Available_Units,
      category: req.body.category,
    };

    const findItemArr = items.find((itemInArray) => itemInArray.id === item.id);
    // console.log(findItemArr);
    if (findItemArr) {
      return res
        .status(409)
        .send(
          `The product Id ${item.id} that you are trying to create already exists.... try a different one`
        );
    } else {
      items.push(item);
      const stringPro = JSON.stringify(items);
      res.json(items);
      // console.log(stringPro);
      appendModule.appendFile(stringPro, databaseName);
    }
  });

  // Get Item By Id

  app.get('/api/v1/products/:productId', (req, res, next) => {
    const { productId } = req.params,
      parseItem = parseInt(productId),
      item = items.find((item) => item.id === parseItem);

    if (item?.id === parseItem) {
      res.send(item);
    } else {
      return res
        .status(404)
        .send(`The item with the given ID ${parseItem} was not found`);
    }
  });

  //Patch

  app.patch('/api/v1/products/:productId', (req, res) => {
    const { productId } = req.params,
      parseItem = parseInt(productId),
      item = items.find((item) => item.id === parseItem);

    const result = schemaFull.validate(req.body);
    if (result.error) {
      return res.status(400).send(result.error);
    }

    if (item?.id === parseItem) {
      const itemNew = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        Available_Units: req.body.Available_Units,
        category: req.body.category,
      };
      items.splice(item, 1, itemNew);
      res.send(items);
    } else {
      return res
        .status(404)
        .send(`The item with the given ID ${parseItem} was not found`);
    }

    const itemString = JSON.stringify(items);
    appendModule.appendFile(itemString, databaseName);
  });

  // Delete

  app.delete('/api/v1/products/:productId', (req, res) => {
    const { productId } = req.params,
      parseItem = parseInt(productId),
      item = items.find((item) => item.id === parseItem),
      itemIndex = items.indexOf(item);

    if (item?.id === parseItem) {
      items.splice(itemIndex, 1);
      // console.log(items);
      res.send(items);
    } else {
      return res
        .status(404)
        .send(
          `The product Id ${parseItem} that you are trying to delete doesn't exists.... try a different one`
        );
    }

    const itemString = JSON.stringify(items);
    appendModule.appendFile(itemString, databaseName);
  });
};

readFile();

app.listen(port, () => {
  console.log(`Listening in http://localhost:${port}`);
});
