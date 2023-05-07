const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/postgresql');

class User extends Model {}

User.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    lastname: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    birthday: { type: DataTypes.DATE, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    nationalId: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

module.exports = User;
