import toastr from 'toastr';
import * as recomendationActions from '../actions/recomendation';

export const toaster = store => next => action => {
  switch (action.type) {
    case recomendationActions.RECOMENDATION_CREATE_SUCCESS:
      toastr.success('Create success');
      break;
    default:
      break;
  }

  return next(action);
};
