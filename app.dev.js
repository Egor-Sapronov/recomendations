GLOBAL.__rootdir = __dirname;
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyparser = require('body-parser');
const passport = require('./libs/auth/auth');
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
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: false,
}));
app.use(methodOverride());
app.use(passport.initialize());

app.use('/', router);

app.get('/', (req, res) => {
  res.render('index');
});

console.log('dev');

module.exports = app;