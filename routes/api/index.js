const express = require('express');
const router = express.Router();

const stravaRoute = require('./strava');
const package = require('../../package.json');

router.get('/', function (req, res) {
    const data = { version: package.version };
    res.json(data);
});
router.use('/strava', stravaRoute);

module.exports = router;