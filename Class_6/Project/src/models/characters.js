const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/localConnection');

class Character extends Model {}

Character.init(
  {
    id: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
    fullname: { type: DataTypes.STRING, allowNull: false },
    serie: { type: DataTypes.STRING, allowNull: false },
    studio: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    firstappearance: { type: DataTypes.DATE, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
    episodes: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  {
    sequelize,
    modelName: 'Character',
  }
);

module.exports = Character;
