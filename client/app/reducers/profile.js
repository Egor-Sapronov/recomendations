import * as profileActions from '../actions/profile';
import {loadingSymbol} from '../utils/symbols';

export default function profile(state = {}, action) {
    switch (action.type) {
        case profileActions.GET_PROFILE_START:
            return {
                isLoading: action[loadingSymbol],
            };
        case profileActions.GET_PROFILE_SUCCESS:
            return {
                isLoading: action[loadingSymbol],
                ...action.profile,
            };
        default:
            return {
                isLoading: false,
            };
    }
}
