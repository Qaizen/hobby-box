const { HobbyBox } = require('../models');

const HobbyBoxData = [
  {
    product_name: 'Chess',
    price: 14.99,
    stock: 11,
  
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
];

const seedHobbyBox = () => HobbyBox.bulkCreate(hobbyBoxData);

module.exports = seedHobbyBox;