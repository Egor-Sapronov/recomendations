import { api } from '../api/api';

export const NEXT_RECOMENDATION_SUCCESS = 'NEXT_RECOMENDATION_SUCCESS';
export const LIKE_SUCCESS = 'LIKE_SUCCESS';
export const RECOMENDATION_CREATE_SUCCESS = 'RECOMENDATION_CREATE_SUCCESS';
export const START_FETCH_NEXT = 'START_FETCH_NEXT';

export function startFetchNext() {
    return {
        type: START_FETCH_NEXT,
    };
}

export function nextRecomandationSuccess(recomendation) {
    return {
        type: NEXT_RECOMENDATION_SUCCESS,
        recomendation,
    };
}

export function likeSuccess(likeValue) {
    return {
        type: LIKE_SUCCESS,
        like: likeValue,
    };
}

export function createSuccess(recomendation) {
    return {
        type: RECOMENDATION_CREATE_SUCCESS,
        recomendation,
    };
}

export function like(id) {
    return (dispatch) => {
        return api.like(id)
            .then(likeValue => dispatch(likeSuccess(likeValue)))
            .then(() => dispatch(getNext()));
    };
}

export function dislike(id) {
    return (dispatch) => {
        return api.dislike(id)
            .then(likeValue => dispatch(likeSuccess(likeValue)))
            .then(() => dispatch(getNext()));
    };
}

export function create(data) {
    return (dispatch) => {
        return api
            .postRecomendation(data)
            .then(recomendation => dispatch(createSuccess(recomendation)));
    };
}

export function getNext() {
    return (dispatch) => {
        dispatch(startFetchNext());
        return api
            .next()
            .then(recomendation => dispatch(nextRecomandationSuccess(recomendation)));
    };
}
