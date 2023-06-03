import { config } from 'dotenv';

const PORT = process.env.PORT || 3000;
import express from 'express';
const app = express();
import { logger } from './middleware/logEvents';
import { errorHandler } from './middleware/errorHandler';
import mongoose from 'mongoose';
const sequelize = require('./utils/postgresql');

config();

// PlanetScale Cloud Connection
const planetScale = require('./config/planetScaleConnection');

// Local Postgres Connection
const db = require('./config/localConnection');

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
    if (!process.env.MONGODB_CONNECTION) {
      throw new Error('mongo url not defined');
    }
    const conn = await mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log(`MongoDb connected: ${conn.connection.host}`);

    await sequelize.sync();
    await sequelize.authenticate();
    await db.sync();
    await db.authenticate();
    await planetScale.sync();
    await planetScale.authenticate();

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
