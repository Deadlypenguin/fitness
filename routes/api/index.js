const express = require('express');
const router = express.Router();

const stravaRoute = require('./strava');

router.get('/', function (req, res) {
    res.json({});
});
router.use('/strava', stravaRoute);

module.exports = router;