const router = require('express').Router();
const passport = require('../../libs/auth/auth');
const fetch = require('isomorphic-fetch');
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/preview',
passport.authenticate('bearer', {
    session: false,
}), (req, res) => {
    const urls = JSON.parse(req.query.urls);
    return Promise
        .all(urls.map(item => {
            return fetch(`http://api.embed.ly/1/oembed?key=${process.env.EMBED_API_KEY}&url=${item}&luxe=1`)
                .then(resoponse => resoponse.json());
        }))
        .then(data => res.send({data: data.map(item => {
            item._id = new ObjectId();
            return item;
        })}));
});

module.exports = router;
