// Modules to require:
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes')

// The path to the api-routes.js example: www.example.com/api/
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;