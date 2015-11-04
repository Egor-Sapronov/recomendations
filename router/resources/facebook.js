const router = require('express').Router();
const passport = require('../../libs/auth/auth');

router.get('/facebook',
    passport.authenticate('facebook', {
        session: false,
        scope: ['email', 'public_profile', 'user_friends'],
    }));

router.get('/facebook/callback',
    passport.authenticate('facebook', {
        session: true
    }), (req, res) => {
        return res.redirect('/');
    });

module.exports = router;
