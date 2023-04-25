require('dotenv').config();

const PORT = process.env.PORT || 3000,
  path = require('path'),
  express = require('express'),
  app = express(),
  { logger } = require('./middleware/logEvents'),
  errorHandler = require('./middleware/errorHandler'),
  appendFiles = require('./modules/appendFiles'),
  databaseCreator = require('./modules/databaseCreator'),
  databaseName = 'products',
  readFile = require('./controllers/productControllers.js');

// Custom Middleware Logger
app.use(logger);

// built-in middleware to handle urlencoded data
// in other words, form data:
// 'content-type' : application/x-www-form.urlencoded'
// is to handle url form data, when is submitted
app.use(express.urlencoded({ extended: true }));

// built-in middleware for json
app.use(express.json());

app.use('/', require('./routes/router'));

// database Creator
databaseCreator.createDatabase(databaseName);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
