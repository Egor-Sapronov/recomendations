GLOBAL.__rootdir = __dirname;
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyparser = require('body-parser');
const passport = require('./libs/auth/auth');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const router = require('./router/router');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(config.output.publicPath, express.static('./build'));
app.set('view engine', 'jade');
app.set('views', './client/templates');
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    cookie: true,
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false,
}));
app.use(methodOverride());
app.use(passport.initialize());

app.use('/', router);

module.exports = app;
