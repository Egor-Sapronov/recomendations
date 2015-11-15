import * as likesActions from '../actions/likes';
import {loadingSymbol} from '../utils/symbols';

export default function post(state = {isLoading: true}, action) {
    switch (action.type) {
        case likesActions.FETCH_LIKES_START:
            return {
                isLoading: action[loadingSymbol],
            };
        case likesActions.FETCH_LIKES_SUCCESS:
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
