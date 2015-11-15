import * as topActions from '../actions/top';
import {loadingSymbol} from '../utils/symbols';

export default function top(state = {isLoading: true}, action) {
    switch (action.type) {
        case topActions.FETCH_TOP_START:
            return {
                isLoading: action[loadingSymbol],
            };
        case topActions.FETCH_TOP_SUCCESS:
            return {
                isLoading: action[loadingSymbol],
                posts: action.posts,
            };
        default:
            return {
                ...state,
            };
    }
}
