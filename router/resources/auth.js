const router = require('express').Router();
const db = require('../../libs/database/mongoose');
const logger = require('../../libs/logger/logger')('api::recomendations');
const passport = require('../../libs/auth/auth');

router.get('/auth',
  passport.authenticate('basic', { session: false }),
  (req, res) => {
    return db
      .TokenModel
      .findOne({ userId: req.user._id })
      .then(token=> res.send({ token: token.value, user: { _id: req.user._id, email: req.user.email } }))
      .catch(error=> {
        logger.error(error);
        return res.status(400).send({ Error: 'Client error' });
      });
  });

router.post('/auth', (req, res) => {
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

    return token.save(() => res.send({ token: token.value, user: { _id: user._id, email: user.email } }))
      .catch(error=> {
        logger.error(error);
        return res.status(400).send({ Error: 'Client error' });
      });
  });
});

module.exports = router;
