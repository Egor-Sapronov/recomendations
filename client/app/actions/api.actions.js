'use strict';

import actionTypes from '../utils/actionTypes';
import {places} from '../utils/webapi';
import {dispatcher} from '../utils/dispatcher';

export default {
	loadPlaces() {
		dispatcher.dispatch({
			type: actionTypes.LOAD_PLACES
		});

		places();
	}
}