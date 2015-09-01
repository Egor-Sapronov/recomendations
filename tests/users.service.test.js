
'use strict';

let expect = require('chai').expect;
let env = require('node-env-file');
env(__dirname + '/../.env');

describe('Users service', function () {
    let db = require('../libs/database');
    let service = require('../libs/services/users');
    const EMAIl = 'test@email.ru';
    const PASSWORD = '123456';

    beforeEach(function (done) {
        db
            .sequelize
            .sync({ force: true })
            .then(function () {
                done();
            });
    });

    it('Should exist', function () {
        expect(service).to.be.ok;
    });

    describe('#signin', function () {
        it('Should exist', function () {
            expect(service.signin).to.be.ok;
        });

        it('Should assign access token for existing user', function (done) {
            db
                .User
                .create({
                    email: EMAIl,
                    password: PASSWORD
                })
                .then(function (user) {
                    return service.signin(user.id);
                })
                .then(function (result) {
                    expect(result.user).to.be.ok;
                    expect(result.token).to.be.ok;
                    expect(result.user.id).to.be.equal(result.token.UserId);

                    done();
                });
        });
    });

    describe('#register', function () {
        it('Should exist', function () {
            expect(service.register).to.be.ok;
        });

        it('Should create new user and assign access token', function (done) {
            service
                .register({
                    email: EMAIl,
                    password: PASSWORD
                })
                .then(function (result) {
                    expect(result.user).to.be.ok;
                    expect(result.token).to.be.ok;
                    expect(result.user.id).to.be.equal(result.token.UserId);

                    done();
                });
        });
    });

});