'use strict';

const UserModel = require('../database/mongoose').UserModel;
const TokenModel = require('../database/mongoose').TokenModel;

function local(username, password, done) {
	return UserModel
		.findOne({ email: username }).exec()
		.then(user=> {
			if (!user) {
				return done(null, false);
			}

			if (user.checkPassword(password)) {
				return done(null, user);
			}

			return done(null, false);
		});
}

function bearer(token, done) {
	return TokenModel
		.findOne({ value: token })
		.exec()
		.then(tokenResult=> {
			if (!tokenResult) {
				return done(null, false);
			}
			
			return UserModel
				.findById(tokenResult.userId)
				.exec()
				.then(user=> {
					if (!user) {
						return done(null, false, 'Unknown user');
					}

					return done(null, user);
				});
		});
}

module.exports = {
	local: local,
	bearer: bearer
};