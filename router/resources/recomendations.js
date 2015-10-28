const router = require('express').Router();
const db = require('../../libs/database/mongoose');
const multer = require('multer');
const upload = multer({
    dest: 'uploads/'
});
const logger = require('../../libs/logger/logger')('api::recomendations');
const passport = require('../../libs/auth/auth');

router.param('id', (req, res, next, id) => {
    return db.RecomendationModel.findById(id)
        .then(recomendation => {
            if (!recomendation) {
                logger.error(`recomendation ${id} not found`);
                return res.status(404).send({
                    Error: 'Not found'
                });
            }

            req.recomendation = recomendation;
            return next();
        })
        .catch(error => {
            logger.error(error);
            return res.status(400).send({
                Error: 'Client error'
            });
        });
});

router.get('/recomendations/next',
    passport.authenticate('bearer', {
        session: false
    }), (req, res) => {

        return db
            .RecomendationModel
            .findOne()
            .populate('_user')
            .then((recomendation) => {
                return res.send({
                    recomendation: recomendation
                });
            });

        // return db
        //     .RecomendationModel
        //     .aggregate([
        //     {
        //         $match: {
        //             _user: {
        //                 $ne: req.user._id
        //             }
        //         }
        //     },
        //     {
        //         $match: {
        //             'likes._user': {
        //                 $ne: req.user._id
        //             }
        //         }
        //     },
        //     {
        //         $limit: 1
        //     }], (err, recomendations) => {
        //         res.send({
        //             recomendation: recomendations[0]
        //         });
        //     });
    });

router.get('/recomendations', (req, res) => {
    return db
        .RecomendationModel
        .find()
        .populate('_user')
        .then(recomendations => res.send({
            recomendations: recomendations
        }));
});

router.get('/recomendations/:id', (req, res) => {
    return res.send(req.recomendation);
});

router.get('/recomendations/:id/image',
  (req, res) => {
    return res.sendFile(`${__rootdir}/uploads/${req.recomendation.imageName}`);
  });

router.post('/recomendations',
    passport.authenticate('bearer', {
        session: false
    }),
    upload.single('image'), (req, res) => {
        const recomendation = new db.RecomendationModel({
            content: req.body.content,
            imagePath: req.file.filename,
            _user: req.user,
        });

        recomendation.save(error => {
            if (error) {
                logger.error(error);
                res.statusCode = 400;
                return res.send({
                    'Error': 'Client error'
                });
            }

            return res.send(recomendation);
        });
    });

module.exports = router;
