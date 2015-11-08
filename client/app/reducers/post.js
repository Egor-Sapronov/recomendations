import * as postActions from '../actions/post';
import {loadingSymbol} from '../utils/symbols';

export default function post(state = {isLoading: true}, action) {
    switch (action.type) {
        case postActions.FETCH_POST_START:
            return {
                isLoading: action[loadingSymbol],
            };
        case postActions.FETCH_POST_SUCCESS:
            return {
                isLoading: action[loadingSymbol],
                ...action.recomendation,
            };
        default:
            return {
                ...state,
            };
    }
}
