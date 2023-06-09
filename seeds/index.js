const seedUsers = require('./users-seeds');

const seedHobbyBox = require('./hobbyBox-seeds');

const sequelize = require('../config/connection');
const seedSubscriptions = require('./subscriptions-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedHobbyBox();
  console.log('\n----- HOBBYBOX SEEDED -----\n');

  await seedSubscriptions();
  console.log('\n----- SUBSCRIPTION SEEDED -----\n');

  process.exit(0);
};

seedAll();