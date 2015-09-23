'use strict';

import BaseStore from './base.store';
import Immutable from 'immutable';
import actionTypes from '../utils/actionTypes';

class PlacesStore extends BaseStore {
	constructor() {
		super(arguments);

		this.places = Immutable.List();
	}

	fillPlaces(places) {
		this.places = Immutable.List(places);
		this.emitChange();
	}

	dispatchAction(action) {
		switch (action.type) {
			case actionTypes.RECEIVE_PLACES:
				this.fillPlaces(action.places);
		}
	}
}

export default new PlacesStore();