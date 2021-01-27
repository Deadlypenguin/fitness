const express = require('express');
const router = express.Router();

const stravaRoute = require('./strava');
const pkg = require('../../package.json');

router.get('/', function (req, res) {
    const data = { version: pkg.version };
    res.json(data);
});
router.use('/strava', stravaRoute);

module.exports = router;