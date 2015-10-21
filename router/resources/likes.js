const router = require('express').Router();
const db = require('../../libs/database/mongoose');
const logger = require('../../libs/logger/logger')('api::recomendations');
const passport = require('../../libs/auth/auth');

router.post('/recomendations/:id/likes',
  passport.authenticate('bearer', { session: false }),
  (req, res) => {
    const like = new db.LikeModel({
      _user: req.user,
      _recomendation: req.params.id,
      value: true,
    });

    return like.save((error) => {
      if (error) {
        logger.error(error);
        res.statusCode = 400;
        return res.send({ 'Error': 'Client error' });
      }

      return res.send({ like: like });
    });
  });

router.post('/recomendations/:id/dislikes',
  passport.authenticate('bearer', { session: false }),
  (req, res) => {
    const like = new db.LikeModel({
      _user: req.user,
      _recomendation: req.params.id,
      value: false,
    });

    return like.save((error) => {
      if (error) {
        logger.error(error);
        res.statusCode = 400;
        return res.send({ 'Error': 'Client error' });
      }

      return res.send({ like: like });
    });
  });

module.exports = router;
