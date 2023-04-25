require('dotenv').config();
const mongoose = require('mongoose');

const express = require('express'),
  PORT = process.env.PORT || 3000,
  app = express();

console.log('Mongo', process.env.MONGODB_CONNECTION);

app.use('/', require('./routes'));

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}...`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
