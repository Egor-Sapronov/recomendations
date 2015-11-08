import * as createActions from '../actions/create';
import {loadingSymbol, errorSymbol} from '../utils/symbols';

const defaultState = {
    preview: {
        data: [],
    },
};

export default function post(state = defaultState, action) {
    switch (action.type) {
        case createActions.PREVIEW_FETCH_START:
            return {
                ...state,
                preview: {
                    ...state.preview,
                    isLoading: action[loadingSymbol],
                },
            };
        case createActions.PREVIEW_FETCH_SUCCESS:
            return {
                ...state,
                preview: {
                    ...state.preview,
                    isLoading: action[loadingSymbol],
                    data: action.data,
                },
            };
        case createActions.PREVIEW_FETCH_FAILURE:
            return {
                ...state,
                preview: {
                    ...state.preview,
                    isLoading: action[loadingSymbol],
                    error: action[errorSymbol],
                },
            };
        case createActions.RECOMENDATION_CREATE_START:
            return {
                ...state,
                isLoading: action[loadingSymbol],
            };
        case createActions.RECOMENDATION_CREATE_SUCCESS:
            return {
                ...state,
                isLoading: action[loadingSymbol],
            };
        case createActions.RECOMENDATION_CREATE_FAILURE:
            return {
                ...state,
                isLoading: action[loadingSymbol],
                error: action[errorSymbol],
            };
        default:
            return {
                ...state,
            };
    }
}
