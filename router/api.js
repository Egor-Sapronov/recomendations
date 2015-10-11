const router = require('express').Router();
const recomendations = require('./resources/recomendations');

router.use('/', recomendations);

module.exports = router;
