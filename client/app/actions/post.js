import { api } from '../api/api';

import { errorSymbol, loadingSymbol } from '../utils/symbols';

export const FETCH_POST_START = 'FETCH_POST_START';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';

export function fetchStart() {
    return {
        type: FETCH_POST_START,
        [loadingSymbol]: true,
    };
}

export function fetchSuccess(recomendation) {
    return {
        type: FETCH_POST_SUCCESS,
        [loadingSymbol]: false,
        recomendation,
    };
}

export function fetchFailure(error) {
    return {
        type: FETCH_POST_FAILURE,
        [errorSymbol]: error,
    };
}

export function fetchPost(id) {
    return (dispatch) => {
        dispatch(fetchStart());
        return api
            .getPost(id)
            .then(recomendation => dispatch(fetchSuccess(recomendation)))
            .catch(error => dispatch(fetchFailure(error)));
    };
}
