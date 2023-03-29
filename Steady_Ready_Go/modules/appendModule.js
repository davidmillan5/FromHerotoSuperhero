'use strict';

const fs = require('fs');

const appendFun = (data) => {
  fs.appendFileSync(path.join(__dirname, 'database.txt'), data, (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
  res.json(database);
};

module.exports.appendFun = appendFun;
