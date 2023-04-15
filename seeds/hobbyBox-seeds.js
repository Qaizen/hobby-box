const { HobbyBox } = require('../models');

const HobbyBoxData = [
  {
    product_name: 'Chess',
    price: 14.99,
    stock: 11,
    user_id: 9,
  
  },
  {
    product_name: 'Tennis',
    price: 14.99,
    stock: 25,

  },
  {
    product_name: 'Photography',
    price: 14.99,
    stock: 12,
  
  },
  {
    product_name: 'Item3',
    price: 14.99,
    stock: 5,
  
  },
  {
    product_name: 'Item4',
    price: 14.99,
    stock: 19,
  
  },
  {
    product_name: 'Item5',
    price: 14.99,
    stock: 56,
  
  },
];

const seedHobbyBox = () => HobbyBox.bulkCreate(HobbyBoxData);

module.exports = seedHobbyBox;