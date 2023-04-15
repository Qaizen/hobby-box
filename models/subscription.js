
// DON'T BELIEVE WE NEED THIS FILE
// KEEPING JUST IN CASE

// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Subscription extends Model {}

// set up fields and rules for sub model
Subscription.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    hobby_box_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'hobbyBox',
        key: 'id'
      }
    },
    user_id: {
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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Subscription',
  }
);

module.exports = Subscription;