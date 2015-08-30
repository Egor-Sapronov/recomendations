'use strict';

let app = require('./app');
let db = require('./libs/database');

db
	.sequelize
	.sync({ force: true })
	.then(function () {
		app.listen(process.env.PORT || 3000, function () {
			console.log(`Listen port ${process.env.PORT}`)
		});
	});

