import { api } from '../api/api';

import { errorSymbol, loadingSymbol } from '../utils/symbols';

export const START_FETCH_NEXT = 'START_FETCH_NEXT';
export const NEXT_RECOMENDATION_SUCCESS = 'NEXT_RECOMENDATION_SUCCESS';
export const RECOMENDATION_FAILURE = 'RECOMENDATION_FAILURE';
export const LIKE_SUCCESS = 'LIKE_SUCCESS';
export const LIKE_START = 'LIKE_START';

export function startFetchNext() {
    return {
        type: START_FETCH_NEXT,
        [loadingSymbol]: true,
    };
}

export function nextRecomandationSuccess(recomendation) {
    return {
        type: NEXT_RECOMENDATION_SUCCESS,
        [loadingSymbol]: false,
        recomendation,
    };
}

export function likeStart() {
    return {
        type: LIKE_START,
        [loadingSymbol]: true,
    };
}

export function likeSuccess(likeValue) {
    return {
        type: LIKE_SUCCESS,
        [loadingSymbol]: false,
        like: likeValue,
    };
}

export function recomendationFailure(error) {
    return {
        type: RECOMENDATION_FAILURE,
        [errorSymbol]: error,
        [loadingSymbol]: false,
    };
}

export function getNext() {
    return (dispatch) => {
        dispatch(startFetchNext());
        return api
            .next()
            .then(recomendation => dispatch(nextRecomandationSuccess(recomendation)))
            .catch(error => dispatch(recomendationFailure(error)));
    };
}

export function like(id) {
    return (dispatch) => {
        dispatch(likeStart());
        return api.like(id)
            .then(likeValue => dispatch(likeSuccess(likeValue)))
            .then(() => dispatch(getNext()))
            .catch(error => dispatch(recomendationFailure(error)));
    };
}

export function dislike(id) {
    return (dispatch) => {
        dispatch(likeStart());
        return api.dislike(id)
            .then(likeValue => dispatch(likeSuccess(likeValue)))
            .then(() => dispatch(getNext()))
            .catch(error => dispatch(recomendationFailure(error)));
    };
}
