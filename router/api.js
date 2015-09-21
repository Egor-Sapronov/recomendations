'use strict';

const router = require('express').Router();
const places = require('./resources/places');

router.use('/', places);

module.exports = router;