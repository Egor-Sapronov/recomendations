import history from '../utils/history';
import * as createActions from '../actions/create';

export default () => next => action => {
    switch (action.type) {
        case createActions.RECOMENDATION_CREATE_SUCCESS:
            history.pushState(null, `/recomendation/${action.recomendation._id}`);
            next(action);
            break;
        default:
            next(action);
            break;
    }
};
