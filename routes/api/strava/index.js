const express = require('express');
const router = express.Router();

const ytdRoute = require('./ytd');

router.get('/', function (req, res) {
    res.json({});
});
router.use('/ytd', ytdRoute);

module.exports = router;