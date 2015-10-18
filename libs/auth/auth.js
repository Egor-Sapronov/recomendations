const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const BasicStrategy = require('passport-http').BasicStrategy;
const local = require('./strategy').local;
const bearer = require('./strategy').bearer;

passport.use(new BasicStrategy(local));
passport.use(new LocalStrategy({}, local));
passport.use(new BearerStrategy(bearer));

module.exports = passport;
