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
    return res.send({ user: req.user });
  });

module.exports = router;
