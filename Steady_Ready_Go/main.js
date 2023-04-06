'use strict';

const port = process.env.PORT || 3030,
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
    const item = req.body;
    items.videoGames.push(item);
    res.json(items);
    const stringPro = JSON.stringify(items);

    console.log('ran it...');
    appendModule.appendFile(stringPro, databaseName);
  });

  // Get Item By Id

  app.get('/api/v1/products/:productId', (req, res) => {
    const { productId } = req.params,
      parseItem = parseInt(productId),
      itemIndex = items.videoGames
        .map((element) => element.id)
        .indexOf(parseItem);

    res.send(items.videoGames[itemIndex]);
  });

  //Patch

  app.patch('/api/v1/products/:productId', (req, res) => {
    // **TODO
  });

  // Delete

  app.delete('/api/v1/products/:productId', (req, res) => {
    const { productId } = req.params,
      parseItem = parseInt(productId),
      itemIndex = items.videoGames
        .map((element) => element.id)
        .indexOf(parseItem);

    items.videoGames.splice(itemIndex, 1);
    res.send(items.videoGames);
    const itemString = JSON.stringify(items);

    appendModule.appendFile(itemString, databaseName);
  });
};

readFile();

app.listen(port, () => {
  console.log(`Listening in http://localhost:${port}`);
});
