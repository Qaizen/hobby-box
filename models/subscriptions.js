const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Subscriptions extends Model {}

Subscriptions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    activelySubbed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Subscriptions',
  }
);

module.exports = Subscriptions;