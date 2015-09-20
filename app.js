'use strict';

const express = require('express');
let app = express();
const methodOverride = require('method-override');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('./libs/auth/auth');

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

app.get('/signin', (req, res) => {
	return res.render('signin');
});

app.post('/signin',
	passport.authenticate(
		'local',
		{
			session: true,
			failureRedirect: '/bad'
		}),
	(req, res) => {
		res.redirect('/private');
	});	

module.exports = app;