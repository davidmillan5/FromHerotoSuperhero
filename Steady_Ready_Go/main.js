'use strict';

const port = 3000,
  express = require('express'),
  app = express(),
  fs = require('fs'),
  path = require('path');

const createDatabase = () => {
  if (!fs.existsSync('database.txt')) {
    fs.appendFile('database.txt', 'products:{}', function (err) {
      if (err) throw err;
      console.log('database Created');
    });
  }
};

createDatabase();

const database = fs.readFileSync(path.join(__dirname, 'database.txt'), 'utf-8');

app.get('/', (req, res) => {
  res.send(database);
});

app.listen(port, () => {
  console.log(`Listening in http://localhost:${port}`);
});
