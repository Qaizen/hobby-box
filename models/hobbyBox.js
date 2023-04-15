// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class HobbyBox extends Model {}

// set up fields and rules for hobby Box model
HobbyBox.init(
    {
    // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
              isDecimal: true,
            },
          },
        stock: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 10,
          validate: {
            isNumeric: true,
          },
        },
        
        users_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Users',
            key: 'id',
          },
        },
         //can't get working
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'hobbyBox',
    },

);

module.exports = HobbyBox;