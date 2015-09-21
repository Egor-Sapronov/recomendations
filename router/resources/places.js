'use strict';

const router = require('express').Router();
const PlaceModel = require('../../libs/database/mongoose').PlaceModel;

router.get('/places', (req, res) => {
	return PlaceModel
		.find()
		.exec()
		.then(places=> {
			res.send(places);
		});
});

router.get('/places/:id', (req, res) => {
	return PlaceModel
		.findById(req.paramas.id)
		.exec()
		.then(place=> {
			res.send(place);
		});
});

router.post('/places', (req, res) => {
	const place = new PlaceModel({
		title: req.body.title,
		description: req.body.description,
		place: req.body.place,
		loc: req.body.loc,
		face_image: ''
	});

	return place.save((err, entity) => {
		if (entity) {
			res.status(201).send(entity);
		}
	});
});

router.put('/places/:id', (req, res) => {
	return PlaceModel
		.findById(req.paramas.id)
		.exec()
		.then(place=> {
			place.title = req.body.title;
			place.description = req.body.description;
			place.place = req.body.place;
			place.loc = req.body.loc;
			place.face_image = '';

			return place.save((err, entity) => {
				res.status(203).send(entity);
			});
		});
});

router.delete('/places/:id', (req, res) => {
	return PlaceModel
		.findById(req.paramas.id)
		.exec()
		.then(place=> {
			return place.remove(err=> {
				if (!err) {
					res.send({ status: 'Ok' });
				}
			});
		});
});

module.exports = router;