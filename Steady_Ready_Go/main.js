'use strict';

const port = process.env.PORT || 3030,
  express = require('express'),
  app = express(),
  fs = require('fs'),
  Joi = require('joi'),
  path = require('path'),
  databaseModule = require('./modules/databaseCreator.js'),
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

    const appendFile = async () => {
      const filePath = path.join(__dirname, `${databaseName}.txt`),
        data = await fs.promises.writeFile(filePath, stringPro);
      console.log(data);
    };
    console.log('ran it...');
    appendFile();
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

  app.patch('/api/v1/products/:productId', (req, res) => {
    //**TODO */
  });
};

readFile();

app.listen(port, () => {
  console.log(`Listening in http://localhost:${port}`);
});
