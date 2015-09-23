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
	db.db.dropDatabase();
});

module.exports = {
	connection: db,
	UserModel: UserModel,
	TokenModel: TokenModel,
	PlaceModel: PlaceModel
};