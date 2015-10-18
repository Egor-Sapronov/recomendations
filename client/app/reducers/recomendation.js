import * as recomendationActions from '../actions/recomendation';

export default function recomendation(state = {}, action) {
  switch (action.type) {
    case recomendationActions.NEXT_RECOMENDATION_SUCCESS:
      return {
        ...state,
        ...action.recomendation,
      };
    default:
      return state;
  }
}
