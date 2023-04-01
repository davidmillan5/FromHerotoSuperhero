'use strict';

const port = process.env.PORT || 3000,
  express = require('express'),
  app = express(),
  fs = require('fs'),
  Joi = require('joi'),
  path = require('path'),
  databaseModule = require('./modules/databaseCreator.js'),
  validator = require('./modules/productsValidator.js'),
  databaseName = 'database',
  arrayName = 'products';

app.use(express.json());
databaseModule.createDatabase(databaseName);

let database = fs.readFileSync(
  path.join(__dirname, `${databaseName}.txt`),
  'utf-8',
  (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
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
    JSON.stringify(product, null, 2),
    (err) => {
      if (err) throw err;
      console.log('Append Completed');
    }
  ),
    fs.appendFile(
      path.join(__dirname, `${databaseName}.txt`),
      ',\n\n',
      (err) => {
        if (err) throw err;
        console.log('Append Completed');
      }
    );
  res.send(database);
});

app.get('/api/v1/products/:productId', (req, res) => {
  //*TODO
});

/**
 *
 * let array = fs.readFileSync('database.txt').toString().split('\n');
 * for (let i in array) {
 * console.log(array[i]);
 * }
 *
 *
 */

app.listen(port, () => {
  console.log(`Listening in http://localhost:${port}`);
});
