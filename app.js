'use strict';

const express = require('express');
let app = express();
const methodOverride = require('method-override');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('./libs/auth/auth');
const db = require('./libs/database/mongoose');

app.use('/static', express.static('./client/dist'));
app.set('view engine', 'jade');
app.set('views', './client/templates');
app.use(cookieParser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended: false
}));
app.use(methodOverride());
app.use(session({
	secret: 'secret',
	cookie: true,
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (req, res) {
	res.render('index');
});

app.get('/private', _auth, (req, res) => res.render('private'));

app.get('/signin', (req, res) => res.render('signin'));

app.post('/signin',
	passport.authenticate(
		'local',
		{
			session: true,
			failureRedirect: '/signin'
		}),
	(req, res) => {
		res.redirect('/private');
	});

app.get('/signup', (req, res) => res.render('signup'));

app.post('/signup', (req, res) => {
	const user = new db.UserModel({
		email: req.body.email,
		password: req.body.password
	});

	user.save((err, user) => {
		return res.redirect('/');
	});
});

app.get('/users', (req, res) => {
	db.UserModel.find().exec().then(users=> res.send(users));
});

function _auth(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/signin');
}

module.exports = app;