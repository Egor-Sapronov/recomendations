const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const BasicStrategy = require('passport-http').BasicStrategy;
const FaceBookStrategy = require('passport-facebook');
const local = require('./strategy').local;
const bearer = require('./strategy').bearer;
const facebook = require('./strategy').facebook;

passport.use(new BasicStrategy(local));
passport.use(new LocalStrategy({}, local));
passport.use(new FaceBookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL,
}, facebook));
passport.use(new BearerStrategy(bearer));

module.exports = passport;
