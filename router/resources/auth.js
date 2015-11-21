const router = require('express').Router();
const db = require('../../libs/database/mongoose');
const logger = require('../../libs/logger/logger')('api::recomendations');
const passport = require('../../libs/auth/auth');
const crypto = require('crypto');

router.get('/auth',
  passport.authenticate('basic', {
    session: false,
  }), (req, res) => {
    return db
      .TokenModel
      .findOne()
      .populate({
        path: '_user',
        match: {
          _id: req.user._id,
        },
      })
      .exec()
      .then(token => res.send({
        token: token.value,
        user: {
          _id: req.user._id,
          email: req.user.email,
        }
      }))
      .catch(error => {
        logger.error(error);
        return res.status(400).send({
          Error: 'Client error',
        });
      });
  });

router.post('/auth', (req, res) => {
  const user = new db.UserModel({
    email: req.body.email,
    password: req.body.password,
  });

  return user.save((err) => {
    if (err) {
      logger.error(err);
      return res.status(400).send();
    }

    const tokenValue = crypto.randomBytes(32).toString('base64');
    const token = new db.TokenModel({
      _user: user,
      value: tokenValue,
    });

    return token.save((err) => {
      if (err) {
        logger.error(err);
        return res.status(400).send();
      }

      return res.send({
        token: token.value,
        user: {
          _id: user._id,
          email: user.email,
        },
      });
    });
  });
});

module.exports = router;
