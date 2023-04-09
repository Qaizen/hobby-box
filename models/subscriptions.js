// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Subscriptions extends Model {}

// set up fields and rules for sub model
Subscriptions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    // activelySubbed: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: false,
    // },


    hobbybox_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'hobbyBox',
        key: 'id'
      }
    },
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Subscriptions',
  }
);

module.exports = Subscriptions;