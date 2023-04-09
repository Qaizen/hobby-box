// Back log hobby tracker and multiple subs for now-SN
// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class HobbyTracker extends Model {}

// HobbyTracker.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     hobbyID: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       required: true,
//       references: {
//         model: 'hobbyBox',
//         key: 'id'
//       }
//     },
//     SubID: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       required: true,
//       references: {
//         model: 'Subscriptions',
//         key: 'id'
//       }
//     }
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'hobbyTracker',
//   }
// );

// module.exports = HobbyTracker;