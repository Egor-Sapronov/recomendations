'use strict';

let app = require('./app');
let db = require('./libs/database');

db
	.sequelize
	.sync({ force: true })
	.then(function () {
		return db.User.create({
			email: 'egor@email.com',
			password: '123456'
		});
	})
	.then(function () {
		app.listen(process.env.PORT || 3000, function () {
			console.log(`Listen port ${process.env.PORT}`)
		});
	});

