//import models
const {User, Subscription, HobbyBox  } = require('../models');

//User has many subscriptions
User.hasMany(Subscription, {
  foreignKey: 'user_id'
});

//Subscription belongs to a User
Subscription.belongsTo(User, {
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
HobbyBox.hasMany(User, {
  foreignKey: 'hobby_id'
});

// HobbyTracker.belongsTo(HobbyBox, {
//   foreignKey: 'hobby_id'
// })



module.exports = { User, Subscription, HobbyBox, HobbyTracker};