import { api } from '../api/api';
import { errorSymbol, loadingSymbol } from '../utils/symbols';

export const FETCH_NEXT_RECOMENDATION_START = 'FETCH_NEXT_RECOMENDATION_START';
export const FETCH_NEXT_RECOMENDATION_SUCCESS = 'FETCH_NEXT_RECOMENDATION_SUCCESS';
export const FETCH_NEXT_RECOMENDATION_FAILURE = 'FETCH_NEXT_RECOMENDATION_FAILURE';

export const LIKE_SUCCESS = 'LIKE_SUCCESS';
export const LIKE_START = 'LIKE_START';
export const LIKE_FAILURE = 'LIKE_FAILURE';

export function nextStart() {
    return {
        type: FETCH_NEXT_RECOMENDATION_START,
        [loadingSymbol]: true,
    };
}

export function nextSuccess(recomendation) {
    return {
        type: FETCH_NEXT_RECOMENDATION_SUCCESS,
        [loadingSymbol]: false,
        recomendation,
    };
}

export function nextFailure(error) {
    return {
        type: FETCH_NEXT_RECOMENDATION_FAILURE,
        [loadingSymbol]: false,
        [errorSymbol]: error,
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

export function likeFailure(error) {
    return {
        type: LIKE_FAILURE,
        [loadingSymbol]: false,
        [errorSymbol]: error,
    };
}

export function getNext() {
    return (dispatch) => {
        dispatch(nextStart());
        return api
            .next()
            .then(recomendation => dispatch(nextSuccess(recomendation)))
            .catch(error => dispatch(nextFailure(error)));
    };
}

export function like(id) {
    return (dispatch) => {
        dispatch(likeStart());
        return api.like(id)
            .then(likeValue => dispatch(likeSuccess(likeValue)))
            .then(() => dispatch(getNext()))
            .catch(error => dispatch(likeFailure(error)));
    };
}

export function dislike(id) {
    return (dispatch) => {
        dispatch(likeStart());
        return api.dislike(id)
            .then(likeValue => dispatch(likeSuccess(likeValue)))
            .then(() => dispatch(getNext()))
            .catch(error => dispatch(likeFailure(error)));
    };
}
