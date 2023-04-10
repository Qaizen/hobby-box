// Modules to require:
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes')

// The path to the api-routes.js example: www.example.com/api/
router.use('/api', apiRoutes);

router.use('/', homeRoutes);

// JOHN--  putting all front end routes into home-routes.js
// below router.use will no longer be necessary but will remain in case
// of decision change --JOHN

/*
//add front end routes here once created

router.use((req, res) => {
    res.status(404).end();
});
*/

module.exports = router;