'use strict';

const UserModel = require('../database/mongoose').UserModel;

function localStrategy(username, password, done) {
	UserModel
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

module.exports = {
	local: localStrategy
};