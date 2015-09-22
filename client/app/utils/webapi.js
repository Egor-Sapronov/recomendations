/* global fetch */
'use strict';

import actionTypes from './actionTypes';
import placesActions from'../actions/places.actions';

const urls = {
	places: '/api/places'
};

function _getHeaders() {
	return {
		'accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': 'bearer ' + localStorage.getItem('token')
	};
}

function _status(response) {
	if (response.status >= 200 && response.status < 300) {
		return Promise.resolve(response);
	} else {
		return Promise.reject(new Error(response.statusText));
	}
}

function _json(response) {
	return response.json();
}

export function places() {
	return fetch(urls.places, {
		method: 'GET',
		headers: _getHeaders()
	})
		.then(_status)
		.then(_json)
		.then(places=> {
			placesActions.receivePlaces(places);
		});
} 