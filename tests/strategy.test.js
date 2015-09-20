'use strict';

const env = require('node-env-file');
env(`${__dirname}/../.env`);
const expect = require('chai').expect;
const UserModel = require('../libs/database/mongoose').UserModel;
const localStrategy = require('../libs/auth/strategy').local;

beforeEach(done=> {
	UserModel.remove(err=> {
		if (!err) {
			done();
		}
	});
});

describe('Auth strategy', () => {
	describe('Local', () => {
		it('Should exchange user for username and password', done=> {
			const user = new UserModel({
				email: 'sapronov@mail.com',
				password: '123456'
			});

			user
				.save((err, userEntity) => {
					localStrategy('sapronov@mail.com', '123456', (err, userResult) => {
						expect(userResult).to.be.ok;
						done();
					});
				});
		});

		it('Shouldn"t exchange user for incorrect username and password', done=> {
			const user = new UserModel({
				email: 'sapronov@mail.com',
				password: '123456'
			});

			user
				.save((err, userEntity) => {
					localStrategy('sapronov@mail.com', 'test', (err, userResult) => {
						expect(userResult).to.be.not.ok;
						done();
					});
				});
		});
	});
});