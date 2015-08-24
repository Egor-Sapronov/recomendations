'use strict';

let express = require('express');
let app = express();
let Sequelize = require('sequelize');
let sequelize = new Sequelize(process.env.POSTGRE_URL, { logging: false });

app.get('/', function (req, res) {
	res.send('Hello');
});

app.listen(3000, function () {
	console.log('server start');

	sequelize
		.sync({ force: true })
		.then(function () {
			console.log('connected');
		});
});