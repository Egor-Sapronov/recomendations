GLOBAL.__rootdir = __dirname;
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyparser = require('body-parser');
const passport = require('./libs/auth/auth');
const db = require('./libs/database/mongoose');
const router = require('./router/router');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const compiler = webpack(config);
const crypto = require('crypto');

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

app.get('/api/users/me',
  passport.authenticate('bearer', { session: false }),
  (req, res) => res.send({ user: { _id: req.user._id, email: req.user.email } }));

app.get('/api/auth',
  passport.authenticate('basic', { session: false }),
  (req, res) => {
    return db
      .TokenModel
      .findOne({ userId: req.user._id })
      .then(token=> res.send({ token: token.value, user: { _id: req.user._id, email: req.user.email } }));
  });

app.post('/api/auth', (req, res) => {
  const user = new db.UserModel({
    email: req.body.email,
    password: req.body.password,
  });

  return user.save(() => {
    const tokenValue = crypto.randomBytes(32).toString('base64');
    const token = new db.TokenModel({
      userId: user._id,
      value: tokenValue,
    });

    return token.save(() => res.send({ token: token.value, user: { _id: user._id, email: user.email } }));
  });
});

app.get('/api/users', (req, res) => db.UserModel.find().then(users => res.send({ users: users })));

app.get('/users', (req, res) => db.UserModel.find().exec().then(users=> res.send(users)));

module.exports = app;
