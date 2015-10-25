'use strict';

const router = require('express').Router();
const api = require('./api');
const facebook = require('./resources/facebook');

router.use('/', facebook);
router.use('/api', api);

module.exports = router;
