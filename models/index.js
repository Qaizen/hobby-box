//import models
const HobbyBox = require('./HobbyBox');
const Users = require('./Users');
const Subscription = require('./subscriptions');

//Users has many subscriptions
// Users.hasMany(HobbyBox, {
//   foreignKey: 'users_id',
//   onDelete: 'CASCADE'
// });

// // //Hobby box has many users
// HobbyBox.belongsTo(Users, {
//   foreignKey: 'users_id'
// });



HobbyBox.belongsToMany(Users, {
  through: Subscription,
  foreignKey: 'hobbybox_id',
  onUpdate: 'CASCADE',
  onDelete: 'set null'
});

Users.belongsTo(HobbyBox, {
  through: Subscription,
  foreignKey: 'users_id',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE'
});

module.exports = { Users, HobbyBox, Subscription };