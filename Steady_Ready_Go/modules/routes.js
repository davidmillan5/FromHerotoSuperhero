'use strict';

const port = process.env.PORT || 3030,
  express = require('express'),
  app = express(),
  fs = require('fs'),
  Joi = require('joi'),
  path = require('path');

app.use(express.json());

const readFile = async (databaseName) => {
  //Local Variables

  const filePath = path.resolve(`${databaseName}.txt`),
    data = await fs.promises.readFile(filePath, 'utf-8'),
    items = JSON.parse(data);

  //Checks The database was created

  app.get('/', (req, res) => {
    res.send('The Database is online...');
  });

  //Check The Database and what is in it

  app.get('/api/v1/products', (req, res) => {
    res.send(items.objectName);
  });

  // Post a new Item

  app.post('/api/v1/products', (req, res) => {
    const item = req.body;
    items.videoGames.push(item);
    res.json(items);
    const stringPro = JSON.stringify(items);

    const appendFile = async () => {
      const filePath = path.resolve(`${databaseName}.txt`),
        data = await fs.promises.writeFile(filePath, stringPro);
      console.log(data);
    };
    console.log('ran it...');
    appendFile();
  });

  app.patch('/api/v1/products/:productId', (req, res) => {
    const itemId = req.params,
      itemIdInt = parseInt(itemId),
      itemIndex = items.objectName.map((item) => item.id).indexOf(itemIdInt),
      product = items.objectName[itemIndex];
    console.log('videoGames: ', product);
  });
};

module.exports.readFile = readFile;
