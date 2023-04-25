'use strict';

const fs = require('fs'),
  path = require('path');

const createDatabase = (databaseName) => {
  if (!fs.existsSync(`./src/models/${databaseName}.txt`)) {
    fs.appendFile(`./src/models/${databaseName}.txt`, `[]`, function (err) {
      if (err) throw err;
      console.log('database Created');
    });
  }
};

module.exports.createDatabase = createDatabase;
