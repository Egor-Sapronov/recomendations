const router = require('express').Router();
const recomendations = require('./resources/recomendations');
const logger = require('../libs/logger/logger')('api');

router.use('/', (req, res, next) => {
  logger.info(req);

  return next();
});

router.use('/', recomendations);

module.exports = router;
