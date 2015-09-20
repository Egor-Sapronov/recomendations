'use strict';
const env = require('node-env-file');
env(`${__dirname}/.env`);
const app = require('./app');

app.listen(process.env.PORT || 3000, () => {
	console.log(`Listen port ${process.env.PORT}`)
});