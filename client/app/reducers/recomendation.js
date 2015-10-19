import * as recomendationActions from '../actions/recomendation';

export default function recomendation(state = {}, action) {
  switch (action.type) {
    case recomendationActions.NEXT_RECOMENDATION_SUCCESS:
      return action.recomendation ? {
        ...state,
        ...action.recomendation,
        isRecomendation: true,
      } : {
        isRecomendation: false,
      };
    default:
      return state;
  }
}
