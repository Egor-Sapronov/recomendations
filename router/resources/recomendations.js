const router = require('express').Router();
const db = require('../../libs/database/mongoose');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.param('id', (req, res, next, id) => {
  return db.RecomendationModel.findById(id)
    .then(recomendation=> {
      if (!recomendation) {
        return res.status(404).send({ Error: 'Not found' });
      }

      req.recomendation = recomendation;
      return next();
    })
    .catch(error=> {
      return res.status(400).send({ Error: 'Client error' });
    });
});

router.get('/recomendations', (req, res) => {

});

router.get('/recomendations/:id', (req, res) => {
  return res.send(req.recomendation);
});

router.get('/recomendations/:id/image', (req, res) => {
  return res.sendFile(`${__rootdir}/uploads/${req.recomendation.imageName}`);
});

router.post('/recomendations', upload.single('image'), (req, res) => {
  const recomendation = new db.RecomendationModel({
    content: req.body.content,
    imagePath: req.file.filename,
  });

  recomendation.save(err=> {
    if (err) {
      res.statusCode = 400;
      return res.send({ 'Error': err.name });
    }

    return res.send(recomendation);
  });
});

router.put('/recomendations/:id', (req, res) => {

});

router.delete('/recomendations/:id', (req, res) => {

});

module.exports = router;
