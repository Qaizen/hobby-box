//import models
const HobbyBox = require('./HobbyBox');
const Users = require('./Users');

//Users has many subscriptions
Users.hasMany(HobbyBox, {
  foreignKey: 'users_id',
  onDelete: 'CASCADE'
});

// //Hobby box has many users
HobbyBox.belongsTo(Users, {
  foreignKey: 'users_id'
});

module.exports = { Users, HobbyBox };

