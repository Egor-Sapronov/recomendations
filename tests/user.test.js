'use strict';

const env = require('node-env-file');
env(`${__dirname}/../.env`);
const expect = require('chai').expect;
const UserModel = require('../libs/database/mongoose').UserModel;

beforeEach(done=> {
	UserModel.remove(err=> {
		if (!err) {
			done();
		}
	});
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
