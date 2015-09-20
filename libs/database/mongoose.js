'use strict';

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
const UserSchema = require('./schemas/user');
const TokenSchema = require('./schemas/token');
const UserModel = mongoose.model('User', UserSchema);
const TokenModel = mongoose.model('Token', TokenSchema);

db.on('error', err => {
	console.log(err);
});

db.on('open', () => {
	// console.log('connected to db');
});

module.exports = {
	connection: db,
	UserModel: UserModel,
	TokenModel: TokenModel
};