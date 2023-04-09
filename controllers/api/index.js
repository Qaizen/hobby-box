
// Modules to require
const router = require('express').Router();
const hobbyBoxRoutes = require('./hobbyBox-routes');
const userRoutes = require('./user-routes');
const subRoutes = require('./subscription-routes');
// const session = require('./session-routes');

router.use('/hobbybox', hobbyBoxRoutes);
router.use('/user', userRoutes);
router.use('/subscription', subRoutes);
// router.use('/session', session);

module.exports = router;