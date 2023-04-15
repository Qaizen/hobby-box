//from module 14, activity 24 
//it is used in /controllers/homeRoutes.js as;
// router.get('/', withAuth, async (req, res) => { //ETC//

// NOT NEEDED   THIS IS AN EXTRA NON MVP ITEM

/* Example of how this would've been implemented in other project
router.get('/selectWorkout', withAuth,  (req, res) => {
    res.render('selectWorkout', {
      loggedIn: req.session.loggedIn
    });
    return;
  }
  */

const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;