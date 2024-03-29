const router = require('express').Router();
const db = require('../../libs/database/mongoose');
const logger = require('../../libs/logger/logger')('api::recomendations');
const passport = require('../../libs/auth/auth');

router.param('id', (req, res, next, id) => {
    return db
        .RecomendationModel
        .findById(id)
        .populate('_user')
        .exec()
        .then(recomendation => {
            if (!recomendation) {
                logger.error(`recomendation ${id} not found`);
                return res.status(404).send({
                    Error: 'Not found',
                });
            }

            req.recomendation = recomendation;
            return next();
        })
        .catch(error => {
            logger.error(error);
            return res.status(400).send({
                Error: 'Client error',
            });
        });
});

router.get('/users/me/posts',
passport.authenticate('bearer', {
    session: false,
}), (req, res) => {
    return db
        .RecomendationModel
        .find({_user: req.user._id})
        .populate('_user')
        .exec()
        .then(recomendations => res.send({posts: recomendations}));
});

router.get('/users/:userId/posts', (req, res) => {
    return db
        .RecomendationModel
        .find({_user: req.params.userId})
        .populate('_user')
        .exec()
        .then(recomendations => res.send({posts: recomendations}));
});

router.get('/recomendations/top',
(req, res) => {
    return db
        .RecomendationModel
        .find()
        .populate('_user')
        .exec()
        .then(recomendations => res.send({ posts: recomendations.sort((one, two) => {
            if (one.weight < two.weight) {
                return 1;
            }
            if (one.weight > two.weight) {
                return -1;
            }
            return 0;
        })}));
});

router.get('/recomendations/likes',
passport.authenticate('bearer', {
    session: false,
}), (req,res) => {
    return db
        .RecomendationModel
        .find({
            'likes._user': req.user._id,
            'likes.value': true,
        })
        .populate('_user')
        .exec()
        .then(recomendations => res.send({ posts: recomendations }));
});

router.get('/recomendations/next',
passport.authenticate('bearer', {
    session: false,
}), (req, res) => {
    return db
    .RecomendationModel
    .aggregate([
        {
            $match: {
                'likes._user': {
                    $ne: req.user._id,
                },
            },
        },
        {
            $limit: 1,
        }], (err, recomendations) => {
            if (recomendations[0]) {
                return db
                .RecomendationModel
                .findOne({
                    _id: recomendations[0]._id,
                })
                .populate('_user')
                .then(recomendation => res.send({
                    recomendation: recomendation,
                }));
            }

            return res.send({
                recomendation: null,
            });
        });
});

router.get('/recomendations', (req, res) => {
    return db
    .RecomendationModel
    .find()
    .populate('_user')
    .exec()
    .then(recomendations => res.send({
        recomendations: recomendations,
    }));
});

router.get('/recomendations/:id', (req, res) => {
    return res.send({recomendation: req.recomendation});
});

router.post('/recomendations',
    passport.authenticate('bearer', {
        session: false,
    }), (req, res) => {
    const recomendation = new db.RecomendationModel({
        content: req.body.content,
        data: req.body.data,
        _user: req.user,
    });

    return recomendation.save(error => {
        if (error) {
            logger.error(error);
            res.statusCode = 400;
            return res.send({
                'Error': 'Client error',
            });
        }
        return res.send(recomendation);
    });
});

module.exports = router;
