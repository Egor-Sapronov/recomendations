'use strict';

let express = require('express');
let app = express();
let auth = require('./libs/auth/passport');
let methodOverride = require('method-override');
let bodyparser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session');

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

app.post('/signin',
	auth.authenticate('local', {
		session: false
	}),
	function (req, res) {
		res.send('hello');
	});

app.get('/', function (req, res) {
	res.render('index');
});

app.get('/signin', function (req, res) {
	res.render('signin');
});

module.exports = app;