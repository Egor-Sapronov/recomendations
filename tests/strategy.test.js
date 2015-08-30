
'use strict';

let expect = require('chai').expect;
let env = require('node-env-file');
env(__dirname + '/../.env');

describe('Auth strategy', function () {
	let db = require('../libs/database');
	let strategy = require('../libs/auth/strategy');
	const EMAIl = 'test@email.ru';
	const PASSWORD = '123456';

	before(function (done) {
		db
			.sequelize
			.sync({ force: true })
			.then(function () {
				return db
					.User
					.create({
						email: EMAIl,
						password: PASSWORD
					});
			})
			.then(function (user) {
				done();
			});
	});

	describe('#local', function () {
		it('Should return user if password is correct', function (done) {
			strategy.local(EMAIl, PASSWORD, function (err, user) {
				expect(err).not.to.be.ok;
				expect(user).to.be.ok;
				done();
			});
		});

		it('Shouldn"t return user if password is incorrect', function (done) {
			strategy.local(EMAIl, 'bad password', function (err, user) {
				expect(user).not.to.be.ok;
				expect(err).not.to.be.ok;
				done();
			});
		});
	});

});