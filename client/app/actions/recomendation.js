import { api } from '../api/api';

import { errorSymbol, loadingSymbol } from '../utils/symbols';

export const RECOMENDATION_CREATE_START = 'RECOMENDATION_CREATE_START';
export const RECOMENDATION_CREATE_SUCCESS = 'RECOMENDATION_CREATE_SUCCESS';
export const RECOMENDATION_CREATE_FAILURE = 'RECOMENDATION_CREATE_FAILURE';
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

export function createStart() {
    return {
        type: RECOMENDATION_CREATE_START,
        [loadingSymbol]: true,
    };
}

export function createSuccess(recomendation) {
    return {
        type: RECOMENDATION_CREATE_SUCCESS,
        [loadingSymbol]: false,
        recomendation,
    };
}

export function createFailure(error) {
    return {
        type: RECOMENDATION_CREATE_FAILURE,
        [loadingSymbol]: false,
        [errorSymbol]: error,
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

export function create(data) {
    return (dispatch) => {
        dispatch(createStart());
        return api
            .postRecomendation(data)
            .then(recomendation => dispatch(createSuccess(recomendation)))
            .catch(error => dispatch(createFailure(error)));
    };
}
