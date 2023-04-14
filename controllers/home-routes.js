const router = require('express').Router();
const sequelize = require('../config/connection.js');
const { Users, HobbyBox, Subscriptions } = require("../models");

//this will be where we add all front end routes

//route for homepage   NO AUTH YET
router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.render('homePage', {
      loggedIn: req.session.loggedIn
    });
    return;
  } else {
    res.render('homePage');
  }
});

//route for signup page
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  } else {
  res.render('signUp');
  }
});


//route for login
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  } else {
    res.render('login');
  }
  
});

//route for hobbies page
// all hobbies we have available here with pics 4-10 ?? idk
router.get('/hobbies', (req, res) => {
  if (req.session.loggedIn) {
    res.render('hobbies', {
      loggedIn: req.session.loggedIn
    })
    return;
  } else {
    res.render('/')
  }
})


//routes for etc......

// Login route

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



module.exports = router;