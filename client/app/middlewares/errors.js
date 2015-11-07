import { errorSymbol } from '../utils/symbols';
import history from '../utils/history';
import { authFailure } from '../actions/auth';

export default store => next => action => {
    if (action[errorSymbol]) {
        if (action[errorSymbol].response.status === 401) {
            history.pushState(null, '/login');

            return store.dispatch(authFailure());
        }
    }

    return next(action);
};
