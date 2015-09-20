'use strict';

const env = require('node-env-file');
env(`${__dirname}/../.env`);
const mongoose = require('mongoose');
const expect = require('chai').expect;
const UserSchema = require('../libs/database/schemas/user');
const UserModel = mongoose.model('User', UserSchema);

before(done=> {
	mongoose.connect(process.env.DATABASE_URL);
	const connection = mongoose.connection;

	connection.on('open', () => {
		done();
	});
});

beforeEach(done=> {
	UserModel.remove(err=> {
		if (!err) {
			done();
		}
	});
});

describe('User schema', () => {
	it('Should exist', () => {
		expect(UserSchema).to.be.ok;
	});

	describe('User model', () => {
		describe('#checkPassword', () => {
			it('Should return true if password correct', done=> {
				const user = new UserModel({
					email: 'sapronov@mail.com',
					password: '123456'
				});

				user.save((err, userEntity) => {
					expect(userEntity.checkPassword('123456')).to.be.ok;
					done();
				});
			});
			
			it('Should return false if password incorrect', done=> {
				const user = new UserModel({
					email: 'sapronov@mail.com',
					password: '123456'
				});

				user.save((err, userEntity) => {
					expect(userEntity.checkPassword('test')).to.be.not.ok;
					done();
				});
			});
		});
	});
});