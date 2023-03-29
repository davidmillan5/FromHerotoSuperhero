'use strict';

const port = 3000,
  express = require('express'),
  app = express(),
  fs = require('fs'),
  path = require('path'),
  databaseModule = require('./modules/databaseCreator.js'),
  appendModule = require('./modules/appendModule.js'),
  databaseName = 'database',
  objectName = 'products';

app.use(express.json());
databaseModule.createDatabase(databaseName, objectName);

let database = fs.readFile(
  path.join(__dirname, `${databaseName}.txt`),
  'utf-8',
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

app.get('/', (req, res) => {
  res.json(database);
});

app.get('/api/v1/products', (req, res) => {
  res.json(database);
});

app.post('/api/v1/products/', (req, res) => {
  const product = req.body;
  fs.appendFile(
    path.join(__dirname, `${databaseName}.txt`),
    JSON.stringify(product),
    (err) => {
      if (err) throw err;
      console.log('Append Completed');
    }
  );
  res.json(database);
});

app.listen(port, () => {
  console.log(`Listening in http://localhost:${port}`);
});
