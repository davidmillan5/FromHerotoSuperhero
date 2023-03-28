'use strict';

const port = 3000,
  express = require('express'),
  app = express(),
  http = require('http'),
  httpStatus = require('http-status-codes');

app.listen(port, () => {
  console.log(`Listening in http://localhost:${port}`);
});
