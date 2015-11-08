import history from '../utils/history';
import * as recomendationActions from '../actions/recomendation';

export default () => next => action => {
    switch (action.type) {
        case recomendationActions.RECOMENDATION_CREATE_SUCCESS:
            history.pushState(null, `/recomendation/${action.recomendation._id}`);
            next(action);
            break;
        default:
            next(action);
            break;
    }
};
