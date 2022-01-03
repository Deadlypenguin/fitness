const express = require('express');
const router = express.Router();

const yearRoute = require('./year');

router.use('/', yearRoute);

module.exports = router;