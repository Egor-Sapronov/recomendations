import history from '../utils/history';
import * as recomendationActions from '../actions/recomendation';

export default () => next => action => {
    switch (action.type) {
        case recomendationActions.RECOMENDATION_CREATE_SUCCESS:
            history.pushState(null, '/recomendation/id');
            next(action);
            break;
        default:
            next(action);
            break;
    }
};
