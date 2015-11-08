import * as recomendationActions from '../actions/recomendation';
import {loadingSymbol, errorSymbol} from '../utils/symbols';

export default function post(state = {}, action) {
    switch (action.type) {
        case recomendationActions.RECOMENDATION_CREATE_START:
            return {
                isLoading: action[loadingSymbol],
            };
        case recomendationActions.RECOMENDATION_CREATE_SUCCESS:
            return {
                isLoading: action[loadingSymbol],
            };
        case recomendationActions.RECOMENDATION_CREATE_FAILURE:
            return {
                isLoading: action[loadingSymbol],
                error: action[errorSymbol],
            };
        default:
            return {
                ...state,
            };
    }
}
