/* global process */
'use strict';

let Sequelize = require('sequelize');
let sequelize = new Sequelize(process.env.DATABASE_URL, { logging: false });
let db = {
	sequelize: sequelize,
	User: sequelize.import('User', require('./models/user')),
	Token: sequelize.import('Token', require('./models/token'))
};

db.Token.belongsTo(db.User);

module.exports = db;