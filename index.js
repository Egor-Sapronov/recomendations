const isProduction = process.env.NODE_ENV === 'production';
const logger = require('./libs/logger/logger')('server');
const app = isProduction ? require('./app.prod.js') : require('./app.dev.js');
const database = require('./libs/database/mongoose');

database.init()
    .then(() => {
        logger.info('connected to db');
    })
    .catch(err => logger.error(err));

app.listen(process.env.PORT || 3000, () => {
    logger.info(`Listen port ${process.env.PORT}`);
});
