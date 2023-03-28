'use strict';

const port = 3000,
  express = require('express'),
  app = express(),
  fs = require('fs'),
  path = require('path'),
  databaseModule = require('./modules/databaseCreator.js'),
  databaseName = 'database',
  objectName = 'products';

databaseModule.createDatabase(databaseName, objectName);

const database = fs.readFileSync(
  path.join(__dirname, `${databaseName}.txt`),
  'utf-8'
);

app.get('/', (req, res) => {
  res.send(database);
});

app.get('/api/v1/products', (req, res) => {
  res.json(database);
});

app.listen(port, () => {
  console.log(`Listening in http://localhost:${port}`);
});
