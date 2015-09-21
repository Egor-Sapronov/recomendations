'use strict';

const Schema = require('mongoose').Schema;

const Place = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	place: {
		country: {
			type: String
		},
		city: {
			type: String
		}
	},
	loc: {
		type: [Number],
		index: '2dsphere'
	},
	face_image: {
		type: String
	},
	images: [{ type: String }]
});

module.exports = Place;
