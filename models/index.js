//import models
const HobbyBox = require('./HobbyBox');
const Users = require('./Users');
const Subscriptions = require('./Subscriptions');


//Users has many subscriptions
Users.hasMany(Subscriptions, {
  foreignKey: 'users_id'
});

// //Subscriptions belongs to a Users
// Subscriptions.belongsTo(Users, {
//   foreignKey: 'users_id'
// });


//Subscriptions has one hobby boxes
Subscriptions.hasOne(HobbyBox, {
  foreignKey: 'hobbybox_id'
});

// HobbyBox.belongsTo(Subscriptions, {
//   foreignKey: 'hobbybox_id'
// });

//Users has many hobbyboxes
Users.hasMany(HobbyBox, {
  foreignKey: 'users_id'
});








// //Subscriptions has many hobby boxes
Subscriptions.hasMany(HobbyBox, {
  foreignKey: 'hobbybox_id'
});




// HobbyTracker.belongsTo(Subscriptions, {
//   foreignKey: 'sub_id'
// });

// //Hobby box has many users
HobbyBox.hasMany(Users, {
  foreignKey: 'hobbybox_id'
});

// HobbyTracker.belongsTo(HobbyBox, {
//   foreignKey: 'hobby_id'
// })



module.exports = { Users, Subscriptions, HobbyBox };