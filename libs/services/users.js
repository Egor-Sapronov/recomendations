'use strict';

let db = require('../database');

module.exports = (function () {
	function signin(userId) {
		let result = {
			user: null,
			token: null
		};

		return db
			.User
			.findOne({ where: { id: userId } })
			.then(function (userEntity) {
				if (!userEntity) {
					return Promise.reject('User not found');
				}
				result.user = userEntity;
				return db
					.Token
					.create({
						UserId: userEntity.id
					});
			})
			.then(function (token) {
				result.token = token;
				return result;
			});
	}


	function register(user) {
		let result = {
			user: null,
			token: null
		};

		return db
			.User
			.create(user)
			.then(function (userEntity) {
				result.user = userEntity;
				return db
					.Token
					.create({
						UserId: userEntity.id
					});
			})
			.then(function (token) {
				result.token = token;
				return result;
			});
	}

	return {
		register: register,
		signin: signin
	};
})();