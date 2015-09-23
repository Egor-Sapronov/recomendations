'use strict';

import actionTypes from '../utils/actionTypes';
import {dispatcher} from '../utils/dispatcher';

export default {
	receivePlaces(placesArray) {
		dispatcher.dispatch({
			type: actionTypes.RECEIVE_PLACES,
			places: placesArray
		});
	}
}