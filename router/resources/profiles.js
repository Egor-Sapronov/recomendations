const router = require('express').Router();
const db = require('../../libs/database/mongoose');
const passport = require('../../libs/auth/auth');

router.get('/profiles/me',
    passport.authenticate('bearer', {
        session: false,
    }), (req, res) => res.send({
        profile: req.user,
    }));

router.get('/profiles/:id', (req, res) => db
    .UserModel
    .findOne({
        _id: req.params.id,
    })
    .then(user => res.send({
        profile: user,
    })));

module.exports = router;
