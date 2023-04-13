const { Users } = require('../models');

const usersData = [
  {
    username: 'Bill',
    email: 'billsmith@mail.com',
    password: 'Password1!',
  },
  {
    username: 'Joe',
    email: 'joemack@mail.com',
    password: 'Password1!',

  },
  {
    username: 'Lily',
    email: 'lilyrodriguez@mail.com',
    password: 'Password1!',
  },
  {
    username: 'Sally',
    email: 'sallydavis@mail.com',
    password: 'Password1!',
  },
  {
    username: 'Bubba',
    email: 'bubbabuck@mail.com',
    password: 'Password1!',
  },
  {
    username: 'Linda',
    email: 'lindale@mail.com',
    password: 'Password1!',
  },
  {
    username: 'Sue',
    email: 'suecarey@mail.com',
    password: 'Password1!',
  },
  {
    username: 'Mary',
    email: 'maryjones@mail.com',
    password: 'Password1!',
  },
];

const seedUsers = () => Users.bulkCreate(usersData, { individualHooks: true });

module.exports = seedUsers;