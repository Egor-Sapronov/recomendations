const router = require('express').Router();
const api = require('./api');
const facebook = require('./resources/facebook');
const db = require('../libs/database/mongoose');

router.use('/', facebook);
router.use('/api', api);

// router.get('/login', (req, res) => res.render('index'));

router.get('*', (req, res) => {
    if (!req.user) {
        return res.render('index');
    }

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

module.exports = router;
