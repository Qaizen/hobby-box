const { Users } = require('../models');

const usersData = [
  {
    first_name: 'Bill',
    last_name: 'Smith',
    user_name: 'BSmith',
    email: 'billsmith@mail.com',
    password: 'Password1!',
    address:  '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
  },
  {
    first_name: 'Joe',
    last_name: 'Mack',
    user_name: 'JMack',
    email: 'joemack@mail.com',
    password: 'Password1!',
    address:  '123 Richard St',
    city: 'Fort Worth',
    state: 'TX',
    zipCode: '08569',
  },
  {
    first_name: 'Lily',
    last_name: 'Rodriguez',
    user_name: 'lilyr',
    email: 'lilyrodriguez@mail.com',
    password: 'Password1!',
    address:  '123 Poppy St',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '23040',
  },
  {
    first_name: 'Sally',
    last_name: 'Davis',
    user_name: 'sdavis',
    email: 'sallydavis@mail.com',
    password: 'Password1!',
    address:  '123 Barton St',
    city: 'Chicago',
    state: 'IL',
    zipCode: '48326',
  },
  {
    first_name: 'Bubba',
    last_name: 'Buck',
    user_name: 'bbuck',
    email: 'bubbabuck@mail.com',
    password: 'Password1!',
    address:  '123 Some st',
    city: 'Dallas',
    state: 'TX',
    zipCode: '75201',
  },
  {
    first_name: 'Linda',
    last_name: 'Le',
    user_name: 'lle',
    email: 'lindale@mail.com',
    password: 'Password1!',
    address:  '123 South St',
    city: 'Orlando',
    state: 'FL',
    zipCode: '32801',
  },
  {
    first_name: 'Sue',
    last_name: 'Carey',
    user_name: 'scarey',
    email: 'suecarey@mail.com',
    password: 'Password1!',
    address:  '123 Dallas St',
    city: 'miami',
    state: 'FL',
    zipCode: '33101',
  },
  {
    first_name: 'Mary',
    last_name: 'Jones',
    user_name: 'mjones',
    email: 'maryjones@mail.com',
    password: 'Password1!',
    address:  '123 Main St',
    city: 'Brooklyn',
    state: 'NY',
    zipCode: '45678',
  },
];

const seedUsers = () => Users.bulkCreate(usersData, { individualHooks: true });

module.exports = seedUsers;