//import models
const HobbyBox = require('./HobbyBox');
const Users = require('./Users');
const Subscription = require('./subscription');

//Users has many subscriptions
// Users.hasMany(HobbyBox, {
//   foreignKey: 'users_id',
//   onDelete: 'CASCADE'
// });

// // //Hobby box has many users
// HobbyBox.belongsTo(Users, {
//   foreignKey: 'users_id'
// });



// HobbyBox.belongsToMany(Users, {
//   through: Subscription,
//   foreignKey: 'hobbybox_id',
//   onUpdate: 'CASCADE',
//   onDelete: 'set null'
// });

// Users.belongsTo(HobbyBox, {
//   through: Subscription,
//   foreignKey: 'users_id',
//   onUpdate: 'CASCADE',
//   onDelete: 'CASCADE'
// });

Users.hasMany(Subscription, {
  foreignKey: 'user_id',
  //as: 'userSub'
});

Subscription.belongsTo(Users, {
  foreignKey: 'user_id',
});

HobbyBox.hasMany(Subscription, {
  foreignKey: 'hobby_box_id',
  //as: 'hobbySub'
});

Subscription.belongsTo(HobbyBox, {
  foreignKey: 'hobby_box_id',
});

Users.belongsToMany(HobbyBox, {
  through: Subscription,
})

HobbyBox.belongsToMany(Users, {
  through: Subscription,
})



module.exports = { Users, HobbyBox, Subscription };