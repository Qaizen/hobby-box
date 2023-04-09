// Modules to require:
const router = require('express').Router();
const apiRoutes = require('./api');

// The path to the api-routes.js example: www.example.com/api/
router.use('/api', apiRoutes);

//add front end routes here once created

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;