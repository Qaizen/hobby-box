const { HobbyBox } = require('../models');

const HobbyBoxData = [
  {
    product_name: 'Chess',
    price: 14.99,
    stock: 11,
    users_id: 1,
  
  },
  {
    product_name: 'Tennis',
    price: 14.99,
    stock: 25,
    users_id: 2,
  },
  {
    product_name: 'Photography',
    price: 14.99,
    stock: 12,
    users_id: 3,
  },
  {
    product_name: 'Item3',
    price: 14.99,
    stock: 5,
    users_id: 4,
  },
  {
    product_name: 'Item4',
    price: 14.99,
    stock: 19,
    users_id: 5,
  },
  {
    product_name: 'Item5',
    price: 14.99,
    stock: 56,
    users_id: 6,
  },
];

const seedHobbyBox = () => HobbyBox.bulkCreate(HobbyBoxData);

module.exports = seedHobbyBox;