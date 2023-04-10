//from module 14, activity 24 
//it is used in /controllers/homeRoutes.js as;
// router.get('/', withAuth, async (req, res) => { //ETC//

//The problem I see here is that it's not used inside the router.get except for what is above
// Unsure as to how this is applicable

//this is being used as a redirect for when someone accesses a page
// which requires login credentials. 
// I believe we use this as our auth requirement in a similar way
// that being, when a user tries to view their account, it will
// send them to a login page.      Need to discuss at next meeting
// how exactly we want to use this/make it work
const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;