const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class hobbyBox extends Model {}

hobbyBox.init(
    {
    // define columns
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    product_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tag_id: {
        type: DataTypes.INTEGER,

    },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "hobbyBox",
    }
);

module.exports = hobbyBox;