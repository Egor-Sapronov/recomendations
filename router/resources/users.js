const router = require('express').Router();
const db = require('../../libs/database/mongoose');
const passport = require('../../libs/auth/auth');

router.get('/users/me',
  passport.authenticate('bearer', { session: false }),
  (req, res) => {
    return res.send({ user: req.user });
  });

router.get('/users',
  (req, res) => {
    return db.UserModel
      .find()
      .then(users => res.send({ users: users }));
  });

module.exports = router;
