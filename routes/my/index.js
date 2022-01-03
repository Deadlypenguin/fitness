const express = require('express');
const moment = require('moment');
const router = express.Router();

const routingUtils = require('../../utils/routing');

router.get('/', function (req, res) {
    res.render('pages/my');
});

router.get('/:year', routingUtils.verifyAuth, function (req, res) {
    const year = req.params.year === 'ytd' ? moment().utc().year() : req.params.year;
    const data = {
        user: req.user,
        year: year
    };
    res.render('pages/my/year', data);
});

module.exports = router;