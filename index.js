'use strict';
const logger = require('./libs/logger/logger')('server');
const app = require('./app');
const database = require('./libs/database/mongoose');

database.init()
  .then(() => {
    logger.info('connected to db');
  })
  .catch(err=> logger.error(err));

app.listen(process.env.PORT || 3000, () => {
  logger.info(`Listen port ${process.env.PORT}`);
});


