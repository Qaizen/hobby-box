const router = require('express').Router();
const sequelize = require('../config/connection.js');
const { Users, HobbyBox, Subscriptions } = require("../models");

//this will be where we add all front end routes

//route for homepage   NO AUTH YET
router.get('/', (req, res) => {
  res.render('homePage');
});

//route for signup page      this is where we whill need req.session.loggedIn

router.get('/signup', (req, res) => {
  res.render('signUp')
})


//route for login
router.get('/login', (req, res) => {
  res.render('login')
})

//route for sign up
router.get('/signup', (req, res) => {
  res.render('signUp')
})

//route for hobbies page
// all hobbies we have available here with pics 4-10 ?? idk
router.get('/hobbies', (req, res) => {
  res.render('hobbies')
})


//routes for etc......

module.exports = router;