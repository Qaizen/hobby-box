const {User, Subscription, HobbyBox, HobbyTracker } = require('../models');

User.hasMany(Subscription, {
  foreignKey: 'user_id'
});

Subscription.belongsTo(Users, {
  foreignKey: 'user_id'
});

Subscription.hasMany(HobbyTracker, {
  foreignKey: 'sub_id'
});

HobbyTracker.belongsTo(Subscription, {
  foreignKey: 'sub_id'
});

HobbyBox.hasMany(HobbyTracker, {
  foreignKey: 'hobby_id'
});

HobbyTracker.belongsTo(HobbyBox, {
  foreignKey: 'hobby_id'
})



module.exports = { User, Subscription, HobbyBox, HobbyTracker};