const router = require('express').Router();
const db = require('../../libs/database/mongoose');
const logger = require('../../libs/logger/logger')('api::recomendations');
const passport = require('../../libs/auth/auth');

router.get('/users/me',
  passport.authenticate('bearer', {
    session: false
  }), (req, res) => {
    res.send({
      user: {
        _id: req.user._id,
        email: req.user.email
      }
    });
  });

router.get('/users', (req, res) => db.UserModel.find().then(users => res.send({
  users: users
})));

module.exports = router;
