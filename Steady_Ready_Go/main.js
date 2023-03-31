'use strict';

const port = process.env.PORT || 3000,
  express = require('express'),
  app = express(),
  fs = require('fs'),
  Joi = require('joi'),
  path = require('path'),
  databaseModule = require('./modules/databaseCreator.js'),
  databaseName = 'database',
  objectName = 'products';

app.use(express.json());
databaseModule.createDatabase(databaseName, objectName);

let database = fs.readFileSync(
  path.join(__dirname, `${databaseName}.txt`),
  'utf-8',
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

app.get('/', (req, res) => {
  res.send('The Database is online...');
});

app.get('/api/v1/products', (req, res) => {
  console.log('Query completed');
  console.log(database);
  res.send(database);
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
  res.send(database);
});

// app.get('/api/v1/products/:productId', (req, res) => {
//   const { productId } = req.params;
//   const database = database.find((product) => product.id === productId);
//   // console.log(req.params);
//   res.json(product);
// });

app.listen(port, () => {
  console.log(`Listening in http://localhost:${port}`);
});
