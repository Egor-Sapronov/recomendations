'use strict';
const env = require('node-env-file');
env(`${__dirname}/.env`);
const app = require('./app');
const db = require('./libs/database/mongoose');
const faker = require('./faker/fake');

faker.places(100)
	.then(places=> {

		app.listen(process.env.PORT || 3000, () => {
			console.log(`Listen port ${process.env.PORT}`)
		});
	})
	.catch(err=> console.log(err));


