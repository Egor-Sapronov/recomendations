import { api } from '../api/api';

import { errorSymbol, loadingSymbol } from '../utils/symbols';

export const RECOMENDATION_CREATE_START = 'RECOMENDATION_CREATE_START';
export const RECOMENDATION_CREATE_SUCCESS = 'RECOMENDATION_CREATE_SUCCESS';
export const RECOMENDATION_CREATE_FAILURE = 'RECOMENDATION_CREATE_FAILURE';

export const PREVIEW_FETCH_START = 'PREVIEW_FETCH_START';
export const PREVIEW_FETCH_SUCCESS = 'PREVIEW_FETCH_SUCCESS';
export const PREVIEW_FETCH_FAILURE = 'PREVIEW_FETCH_FAILURE';

export function previewStart() {
    return {
        type: PREVIEW_FETCH_START,
        [loadingSymbol]: true,
    };
}

export function previewSuccess(data) {
    return {
        type: PREVIEW_FETCH_SUCCESS,
        [loadingSymbol]: false,
        data,
    };
}

export function previewFailure(error) {
    return {
        type: PREVIEW_FETCH_FAILURE,
        [loadingSymbol]: false,
        [errorSymbol]: error,
    };
}

export function preview(urls) {
    return (dispatch) => {
        dispatch(previewStart());
        return api
            .getPreview(urls)
            .then(data => dispatch(previewSuccess(data)))
            .catch(error => dispatch(previewFailure(error)));
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

export function create(data) {
    return (dispatch) => {
        dispatch(createStart());
        return api
            .postRecomendation(data)
            .then(recomendation => dispatch(createSuccess(recomendation)))
            .catch(error => dispatch(createFailure(error)));
    };
}
