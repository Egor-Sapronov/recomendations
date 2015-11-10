import * as profileActions from '../actions/profile';
import {loadingSymbol} from '../utils/symbols';

const initialState = {
    data: {
        posts: [],
    },
};

export default function profile(state = initialState, action) {
    switch (action.type) {
        case profileActions.GET_PROFILE_START:
            return {
                ...state,
                isLoading: action[loadingSymbol],
            };
        case profileActions.GET_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: action[loadingSymbol],
                ...action.profile,
            };
        case profileActions.GET_PROFILE_POSTS_START:
            return {
                ...state,
                data: {
                    posts: [],
                    isLoading: action[loadingSymbol],
                },
            };
        case profileActions.GET_PROFILE_POSTS_SUCCESS:
            return {
                ...state,
                data: {
                    isLoading: action[loadingSymbol],
                    posts: action.posts,
                },
            };
        default:
            return {
                ...state,
                isLoading: false,
            };
    }
}
