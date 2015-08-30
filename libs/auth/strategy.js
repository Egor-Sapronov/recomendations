'use strict';

let db = require('../database');

module.exports = (function () {

	function localStrategy(email, password, done) {
		return db
			.User
			.findOne({
				email: email
			})
			.then(function (user) {
				if (!user) {
					return done(null, false);
				}

				if (!user.checkPassword(password)) {
					return done(null, false);
				}

				return done(null, user);
			})
	}

	return {
		local: localStrategy
	};
})();