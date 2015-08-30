'use strict';

let passport = require('passport');
let strategy = require('./strategy');
let LocalStrategy = require('passport-local');
let db = require('../database');

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	db
		.User
		.findOne({ where: { id: id } })
		.then(function (user) {
			return done(null, user);
		});
});

passport.use(new LocalStrategy({}, strategy.local));

module.exports = passport;