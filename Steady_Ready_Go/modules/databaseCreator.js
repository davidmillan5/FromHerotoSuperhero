'use strict';

const fs = require('fs');

const createDatabase = (databaseName) => {
  if (!fs.existsSync(`${databaseName}.txt`)) {
    fs.appendFile(`${databaseName}.txt`, `[]`, function (err) {
      if (err) throw err;
      console.log('database Created');
    });
  }
};

module.exports.createDatabase = createDatabase;

//console.log(module);
