'use strict';

const path = require('path'),
  fs = require('fs');

const appendFile = async (string, databaseName) => {
  const filePath = path.join(__dirname, `../${databaseName}.txt`),
    data = await fs.promises.writeFile(filePath, string);
  console.log(data);
};

module.exports.appendFile = appendFile;
