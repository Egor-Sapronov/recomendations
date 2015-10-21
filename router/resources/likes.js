const router = require('express').Router();
const db = require('../../libs/database/mongoose');
const logger = require('../../libs/logger/logger')('api::recomendations');
const passport = require('../../libs/auth/auth');

router.param('id',
  (req, res, next, id) => {
    return db.RecomendationModel.findById(id)
      .then(recomendation=> {
        if (!recomendation) {
          logger.error(`recomendation ${id} not found`);
          return res.status(404).send({ Error: 'Not found' });
        }

        req.recomendation = recomendation;
        return next();
      })
      .catch(error=> {
        logger.error(error);
        return res.status(400).send({ Error: 'Client error' });
      });
  });

router.get('/likes',
  (req, res) => {
    return db
      .LikeModel
      .find()
      .then(likes=> res.send({ likes: likes }));
  });

router.post('/recomendations/:id/likes',
  passport.authenticate('bearer', { session: false }),
  (req, res) => {
    const like = {
      _user: req.user,
      value: true,
    };

    req.recomendation.likes.push(like);
    req.recomendation.save(err=> {
      if (err) {
        logger.error(err);
        res.statusCode = 400;
        return res.send({ 'Error': 'Client error' });
      }
      return res.send({ like: like });
    });
  });

router.post('/recomendations/:id/dislikes',
  passport.authenticate('bearer', { session: false }),
  (req, res) => {
    const like = {
      _user: req.user,
      value: false,
    };

    req.recomendation.likes.push(like);
    req.recomendation.save(err=> {
      if (err) {
        logger.error(err);
        res.statusCode = 400;
        return res.send({ 'Error': 'Client error' });
      }
      return res.send({ like: like });
    });
  });

module.exports = router;
