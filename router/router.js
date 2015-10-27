const router = require('express').Router();
const api = require('./api');
const facebook = require('./resources/facebook');
const db = require('../libs/database/mongoose');

router.use('/', facebook);
router.use('/api', api);

router.get('/', (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/signin');
}, (req, res) => {
    return db
        .TokenModel
        .findOne({
            '_user': req.user._id,
        })
        .then(token => {
            return res.render('index', {
                token: token.value,
            });
        });
});

router.get('/signin', (req, res) => res.render('signin'));

module.exports = router;
