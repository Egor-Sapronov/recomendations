/* global process */
'use strict';

let app = require('./app');

app.listen(process.env.PORT || 3000, function () {
	console.log(`Listen port ${process.env.PORT}`)
});