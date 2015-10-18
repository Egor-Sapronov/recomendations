const router = require('express').Router();
const db = require('../../libs/database/mongoose');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
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

router.get('/recomendations/next',
  passport.authenticate('bearer', { session: false }),
  (req, res) => {
    return db
      .RecomendationModel
      .find({
        userId: { $ne: req.user._id },
      })
      .then(recomendations=> {
        const recomendationsIds = recomendations.map(recomendation => recomendation._id);

        return db.LikeModel.find({ recomendationId: { $in: recomendationsIds } })
          .then(likes => {
            if (likes.length === 0 && recomendationsIds.length > 0) {
              return db.RecomendationModel.findOne({ _id: recomendationsIds[0] }).then(recomendation => res.send({ recomendation: recomendation }));
            }

            if (likes.length > 0 && recomendationsIds.length > 0) {
              const likesIds = likes.map(like=> like.recomendationId);
              console.log('likes', likesIds);
              console.log('recomendations', recomendationsIds);

              return db.RecomendationModel.findOne({ _id: { $in: recomendationsIds, $nin: likesIds } }).then(recomendation => res.send({ recomendation: recomendation }));
            }
          });
      });
  });

router.get('/recomendations',
  (req, res) => {
    return db
      .RecomendationModel
      .find()
      .then(recomendations=> res.send({ recomendations: recomendations }));
  });

router.get('/recomendations/:id',
  (req, res) => {
    return res.send(req.recomendation);
  });

router.get('/recomendations/:id/image',
  (req, res) => {
    return res.sendFile(`${__rootdir}/uploads/${req.recomendation.imageName}`);
  });

router.post('/recomendations',
  passport.authenticate('bearer', { session: false }),
  upload.single('image'),
  (req, res) => {
    const recomendation = new db.RecomendationModel({
      content: req.body.content,
      imagePath: req.file.filename,
      userId: req.user._id,
    });

    recomendation.save(error=> {
      if (error) {
        logger.error(error);
        res.statusCode = 400;
        return res.send({ 'Error': 'Client error' });
      }

      return res.send(recomendation);
    });
  });

router.put('/recomendations/:id', (req, res) => {

});

router.delete('/recomendations/:id', (req, res) => {

});

module.exports = router;
