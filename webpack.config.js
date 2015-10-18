const isProduction = process.env.NODE_ENV === 'production';
const config = isProduction ? require('./webpack.config.prod.js') : require('./webpack.config.dev.js');
module.exports = config;
