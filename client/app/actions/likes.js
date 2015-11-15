import { api } from '../api/api';

import { errorSymbol, loadingSymbol } from '../utils/symbols';

export const FETCH_LIKES_START = 'FETCH_LIKES_START';
export const FETCH_LIKES_SUCCESS = 'FETCH_LIKES_SUCCESS';
export const FETCH_LIKES_FAILURE = 'FETCH_LIKES_FAILURE';

export function fetchStart() {
    return {
        type: FETCH_LIKES_START,
        [loadingSymbol]: true,
    };
}

export function fetchSuccess(posts) {
    return {
        type: FETCH_LIKES_SUCCESS,
        [loadingSymbol]: false,
        posts,
    };
}

export function fetchFailure(error) {
    return {
        type: FETCH_LIKES_FAILURE,
        [errorSymbol]: error,
    };
}

export function fetchLikes() {
    return (dispatch) => {
        dispatch(fetchStart());
        return api
            .likes()
            .then(posts => dispatch(fetchSuccess(posts)))
            .catch(error => dispatch(fetchFailure(error)));
    };
}
