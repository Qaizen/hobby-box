const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class HobbyBox extends Model {}

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
        hobby
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'hobbyBox',
    }
);

module.exports = HobbyBox;