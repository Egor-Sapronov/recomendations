const router = require('express').Router();
const db = require('../../libs/database/mongoose');
const passport = require('../../libs/auth/auth');

router.get('/facebook',
  passport.authenticate('facebook', {
    session: false,
    scope: ['email', 'public_profile'],
  }));

router.get('/facebook/callback',
  passport.authenticate('facebook', { session: false }),
  (req, res) => {
    return db
      .TokenModel
      .findOne()
      .populate({
        path: '_user',
        match: {
          _id: req.user._id,
        },
      }, (token) => {
        res.send({ user: token });
      });
  });

module.exports = router;
