require('dotenv').config();

const PORT = process.env.PORT || 3000,
  express = require('express'),
  app = express(),
  { logger } = require('./middleware/logEvents'),
  errorHandler = require('./middleware/errorHandler'),
  handleFile = require('./controllers/productControllers'),
  mongoose = require('mongoose');
const sequelize = require('./utils/postgresql');

// Custom Middleware Logger
app.use(logger);

// built-in middleware to handle urlencoded data
// in other words, form data:
// 'content-type' : application/x-www-form.urlencoded'
// is to handle url form data, when is submitted
app.use(express.urlencoded({ extended: true }));

// built-in middleware for json
app.use(express.json());

app.use('/', require('./routes'));

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}...`);
      console.log('Connected to Database...');
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
