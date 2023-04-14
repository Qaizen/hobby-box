/*
const { Subscriptions } = require('../models');

const subscriptionsData = [
  {
    hobbybox_id: 1,
    users_id: 1,
  },
  {
    hobbybox_id: 1,
    users_id: 2,
  },
  {
    hobbybox_id: 1,
    users_id: 3,
  },
  {
    hobbybox_id: 2,
    users_id: 4,
  },
  {
    hobbybox_id: 3,
    users_id: 5,
  },
  {
    hobbybox_id: 3,
    users_id: 6,
  },
  {
    hobbybox_id: 3,
    users_id: 7,
  },
  {
    hobbybox_id: 3,
    users_id: 8,
  },
];

const seedSubscriptions = () => Subscriptions.bulkCreate(subscriptionsData);

module.exports = seedSubscriptions;