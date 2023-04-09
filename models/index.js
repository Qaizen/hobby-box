//import models
const {Users, Subscription, HobbyBox  } = require('../models');

//Users has many subscriptions
Users.hasMany(Subscription, {
  foreignKey: 'user_id'
});

//Subscription belongs to a Users
Subscription.belongsTo(Users, {
  foreignKey: 'user_id'
});

//Subscription has many hobby boxes
Subscription.hasMany(HobbyBox, {
  foreignKey: 'sub_id'
});

// HobbyTracker.belongsTo(Subscription, {
//   foreignKey: 'sub_id'
// });

//Hobby box has many users
HobbyBox.hasMany(Users, {
  foreignKey: 'hobby_id'
});

// HobbyTracker.belongsTo(HobbyBox, {
//   foreignKey: 'hobby_id'
// })



module.exports = { Users, Subscription, HobbyBox, HobbyTracker};