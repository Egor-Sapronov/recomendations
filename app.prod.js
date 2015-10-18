GLOBAL.__rootdir = __dirname;
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyparser = require('body-parser');
const passport = require('./libs/auth/auth');
const router = require('./router/router');
const config = require('./webpack.config.js');

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

console.log('prod');

module.exports = app;
