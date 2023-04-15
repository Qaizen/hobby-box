
const { Subscription } = require('../models');

const subscriptionsData = [
  {
    hobby_box_id: 1,
    user_id: 1,
  },
  {
    hobby_box_id: 2,
    user_id: 2,
  },
  {
    hobby_box_id: 3,
    user_id: 3,
  },
  {
    hobby_box_id: 4,
    user_id: 4,
  },
  {
    hobby_box_id: 5,
    user_id: 5,
  },
  {
    hobby_box_id: 6,
    user_id: 6,
  },
  // {
  //   hobbybox_id: 3,
  //   users_id: 7,
  // },
  // {
  //   hobbybox_id: 3,
  //   users_id: 8,
  // },
];

const seedSubscriptions = () => Subscription.bulkCreate(subscriptionsData);

module.exports = seedSubscriptions;