
'use strict';

let expect = require('chai').expect;
let env = require('node-env-file');
env(__dirname + '/../.env');

describe('Token model', function () {
	let db = require('../libs/database');

	before(function (done) {
		db.sequelize
			.sync({ force: true })
			.then(function () {
				done();
			});
	});

	it('Should exist', function () {
		expect(db.Token).to.be.ok;
	});

	it('Should create access token with default value', function (done) {
		return db
			.Token
			.create()
			.then(function (token) {
				expect(token.value).to.be.ok;
				done();
			});
	});
});

describe('User model', function () {
	let db = require('../libs/database');
	const EMAIl = 'test@email.ru';
	const PASSWORD = '123456';
	before(function (done) {
		db.sequelize
			.sync({ force: true })
			.then(function () {
				done();
			});
	});

	it('Should exist', function (done) {
		expect(db.User).to.be.ok;
		done();
	});

	it('Should create user and save password as hash', function (done) {
		return db
			.User
			.create({
				email: EMAIl,
				password: PASSWORD
			})
			.then(function (user) {
				return db.User.findOne({ where: { id: user.id } });
			})
			.then(function (user) {
				expect(user.password).not.to.be.ok;
				expect(user.password_hash).to.be.ok;
				done();
			});
	});

	it('Should check user password', function (done) {
		return db
			.User
			.create({
				email: EMAIl,
				password: PASSWORD
			})
			.then(function (user) {
				return db.User.findOne({ where: { id: user.id } });
			})
			.then(function (user) {
				expect(user.checkPassword(PASSWORD)).to.be.ok;
				expect(user.checkPassword('bad password')).not.to.be.ok;
				done();
			});
	});
});