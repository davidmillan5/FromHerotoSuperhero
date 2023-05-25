require('dotenv').config();
const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST_NAME,
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  }
);

const Movie = sequelize.define(
  'Movies',
  {
    id: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    studio: { type: DataTypes.STRING, allowNull: false },
    director: { type: DataTypes.STRING, allowNull: false },
    screenwriter: { type: DataTypes.STRING, allowNull: false },
    release: { type: DataTypes.DATE, allowNull: false },
    genre: { type: DataTypes.STRING, allowNull: false },
    rating: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  }
  // },
  // {
  //   sequelize,
  //   modelName: 'Movie',
  // }
);

module.exports = sequelize;
