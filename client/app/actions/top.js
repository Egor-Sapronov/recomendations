import { api } from '../api/api';

import { errorSymbol, loadingSymbol } from '../utils/symbols';

export const FETCH_TOP_START = 'FETCH_TOP_START';
export const FETCH_TOP_SUCCESS = 'FETCH_TOP_SUCCESS';
export const FETCH_TOP_FAILURE = 'FETCH_TOP_FAILURE';

export function fetchStart() {
    return {
        type: FETCH_TOP_START,
        [loadingSymbol]: true,
    };
}

export function fetchSuccess(posts) {
    return {
        type: FETCH_TOP_SUCCESS,
        [loadingSymbol]: false,
        posts,
    };
}

export function fetchFailure(error) {
    return {
        type: FETCH_TOP_FAILURE,
        [errorSymbol]: error,
    };
}

export function fetchTop() {
    return (dispatch) => {
        dispatch(fetchStart());
        return api
            .top()
            .then(posts => dispatch(fetchSuccess(posts)))
            .catch(error => dispatch(fetchFailure(error)));
    };
}
