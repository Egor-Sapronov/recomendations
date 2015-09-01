'use strict';

let express = require('express');
let app = express();
let auth = require('./libs/auth/passport');
let methodOverride = require('method-override');
let bodyparser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let userService = require('./libs/services/users');
let logger = require('./libs/services/logger')(module);

app.use('/static', express.static('./web/dist'));
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
app.use(auth.initialize());
app.use(auth.session());

app.post('/signup', function (req, res) {
	return userService
		.register(req.body)
		.then(function (result) {
			logger.info(`New user ${result.user.email}`);
			res.redirect('/#token=' + result.token.value);
		});
});

app.post('/signin',
	auth.authenticate('local', {
		session: true
	}),
	function (req, res) {
		userService
			.signin(req.user.id)
			.then(function (result) {
				logger.info(`User ${result.user.email} signin`);
				res.redirect('/#token=' + result.token.value);
			});
	});

app.get('/private', ensureAuthenticated, function (req, res) {
	res.render('index');
});

app.get('/', function (req, res) {
	res.render('index');
});

app.get('/signup', function (req, res) {
	res.render('signup');
});

app.get('/signin', function (req, res) {
	res.render('signin');
});

function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/signin');
}

module.exports = app;