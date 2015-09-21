'use strict';

const db = require('../libs/database/mongoose');
const faker = require('faker');

function fakePlaces(count) {
	return new Promise((resolve, reject) => {
		let placesList = [];

		for (let i = 0; i < count; i++) {
			placesList.push(new db.PlaceModel({
				title: faker.commerce.productName(),
				description: faker.lorem.paragraph(),
				place: {
					country: faker.address.country(),
					city: faker.address.city()
				},
				loc: [faker.address.longitude(), faker.address.latitude()],
				face_image: faker.image.imageUrl()
			})
				);
		}

		Promise.all(placesList.map(place=> {
			return new Promise((res, re) => {
				return place.save((err, placeEntity) => {
					if (err) {
						console.log(err);
					}
					return res(placeEntity);
				});
			});
		}))
			.then(places=> {
				resolve(places);
			});
	});
}

module.exports = {
	places: fakePlaces
};