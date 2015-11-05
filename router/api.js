const router = require('express').Router();

const recomendations = require('./resources/recomendations');
const auth = require('./resources/auth');
const users = require('./resources/users');
const likes = require('./resources/likes');
const profiles = require('./resources/profiles');

const logger = require('../libs/logger/logger')('api');

router.use('/', (req, res, next) => {
    logger.info(req);

    return next();
});

router.use('/', likes);
router.use('/', recomendations);
router.use('/', auth);
router.use('/', users);
router.use('/', profiles);

module.exports = router;
