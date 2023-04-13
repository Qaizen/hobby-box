const router = require('express').Router();
const sequelize = require('../config/connection.js');
const { Users, HobbyBox, Subscriptions } = require("../models");

//this will be where we add all front end routes

//route for homepage   NO AUTH YET
router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.render('hobbies', {
      loggedIn: req.session.loggedIn
    });
    return;
  }
  // res.render('homePage');    ->want user to be directed to hobbies once signed up or logged in
});

//route for signup page this is where we whill need req.session.loggedIn

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/hobbies');
    return;
  }
  res.render('signUp')
});


//route for login
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/hobbies');
    return;
  }
  res.render('login')
})

//route for sign up -> duplicate
// router.get('/signup', (req, res) => {
//   res.render('signUp')
// })

//route for hobbies page
// all hobbies we have available here with pics 4-10 ?? idk
router.get('/hobbies', (req, res) => {
  if (req.session.loggedIn) {
    res.render('hobbies', {
      loggedIn: req.session.loggedIn
    });
    return;
  }
  // res.render('hobbies')
  res.redirect('/')
})

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});
//routes for etc......

module.exports = router;