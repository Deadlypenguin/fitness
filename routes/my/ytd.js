const express = require('express');
const router = express.Router();

const routingUtils = require('../../utils/routing');

router.get('/', routingUtils.verifyAuth, function (req, res) {
    res.render('pages/my/ytd');
});

module.exports = router;