import * as recomendationActions from '../actions/recomendation';
import { loadingSymbol } from '../utils/symbols';

const initialState = {
    isLoading: true,
    data: [],
};

export default function recomendation(state = initialState, action) {
    switch (action.type) {
        case recomendationActions.FETCH_NEXT_RECOMENDATION_START:
            return {
                ...state,
                isLoading: action[loadingSymbol],
            };
        case recomendationActions.FETCH_NEXT_RECOMENDATION_SUCCESS:
            return {
                ...state,
                ...action.recomendation,
                isLoading: action[loadingSymbol],
                isRecomendation: action.recomendation ? true : false,
            };
        case recomendationActions.FETCH_NEXT_RECOMENDATION_FAILURE:
            return {
                ...state,
                isLoading: action[loadingSymbol],
            };
        case recomendationActions.LIKE_START:
        case recomendationActions.LIKE_SUCCESS:
            return {
                ...initialState,
                isLoading: action[loadingSymbol],
            };
        default:
            return state;
    }
}
