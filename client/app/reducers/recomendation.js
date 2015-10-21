import * as recomendationActions from '../actions/recomendation';

export default function recomendation(state = {}, action) {
  switch (action.type) {
    case recomendationActions.START_FETCH_NEXT:
      return {
        isFetching: true,
      }
    case recomendationActions.NEXT_RECOMENDATION_SUCCESS:
      return action.recomendation ? {
        ...state,
        ...action.recomendation,
        isRecomendation: true,
        isFetching: false,
      } : {
        isRecomendation: false,
        isFetching: false,
      };
    default:
      return state;
  }
}
