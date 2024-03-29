import * as authActions from '../actions/auth';

export default function user(state = {}, action) {
    switch (action.type) {
        case authActions.USERINFO_SUCCESS:
            return {
                ...state,
                ...action.user,
            };
        case authActions.AUTH_FAILURE:
            return {};
        default:
            return state;
    }
}
