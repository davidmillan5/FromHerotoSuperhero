const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  'tutorial',
  'odcfuque4jd2i3okclkg',
  'pscale_pw_Le8CdbCNhkdxP475dXrkaCi0lecx9z7gla6Yskgkd5H',
  {
    host: 'aws.connect.psdb.cloud',
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
