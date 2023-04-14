const seedHobbyBox = require('./hobbybox-seeds');
//const seedSubscriptions = require('./subscriptions-seeds');
const seedUsers = require('./users-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedHobbyBox();
  console.log('\n----- HOBBYBOX SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
/*
  await seedSubscriptions();
  console.log('\n----- SUBSCRIPTIONS SEEDED -----\n');
*/
  process.exit(0);
};

seedAll();