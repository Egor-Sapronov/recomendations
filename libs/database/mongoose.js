'use strict';

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
const UserSchema = require('./schemas/user');
const TokenSchema = require('./schemas/token');
const PlaceSchema = require('./schemas/place');
const UserModel = mongoose.model('User', UserSchema);
const TokenModel = mongoose.model('Token', TokenSchema);
const PlaceModel = mongoose.model('Place', PlaceSchema);

db.on('error', err => {
	console.log(err);
});

db.on('open', () => {
	// console.log('connected to db');
});

function clear() {
	return new Promise((resolve, reject) => {
		TokenModel.remove(err=> {
			UserModel.remove(err=> {
				return resolve();
			});
		});
	});
}

module.exports = {
	clear: clear,
	connection: db,
	UserModel: UserModel,
	TokenModel: TokenModel,
	PlaceModel: PlaceModel
};