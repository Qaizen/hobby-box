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
/*
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
*/

//route for the

router.get('/hobbies', async (req, res) => {
  console.log('page but not IF yet\n\n')
  if(req.session.loggedIn) {
    //console.log('after IF')
    try{
      // Find the logged in user based on the session ID
      const userData = await Users.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [
          { 
            model: HobbyBox,
            attributes: ['id', 'product_name']
          },
        ],
      });
      //console.log(userData)
      const user = userData.get({ plain: true });
      //console.log('before render\n\n')
      console.log(user, '\n\n\n\n')
      console.log(user.hobbyBoxes, '\n\n\n')
      res.render('hobbies', {
        ...user,
        loggedIn: req.session.loggedIn
      });
      //console.log(userData)
      //console.log('after render\n\n')
    }catch(err) {
      console.log(err)
      res.render('login');
    }
  }else {
    console.log('no session loggedIn')
    res.render('login');
  }
});


// Logout route
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