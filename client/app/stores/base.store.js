'use strict';

import {EventEmitter} from 'events';
import {dispatcher} from '../utils/dispatcher';

const CHANGE_EVENT = 'change';

class BaseStore extends EventEmitter {
	constructor() {
		super(arguments);

		this.dispatchToken = dispatcher.register(this.dispatchAction.bind(this));
	}

	dispatchAction(action) {
		switch (action.type) {
			default:
				break;
		}
	}

	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}
}

export default BaseStore;