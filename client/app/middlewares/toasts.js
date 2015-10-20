import toastr from 'toastr';
import * as authActions from '../actions/auth';
import * as recomendationActions from '../actions/recomendation';

export const toaster = store => next => action => {
  switch (action.type) {
    case authActions.SIGNIN_SUCCESS:
      toastr.success('Signin success');
      break;
    case authActions.SIGNUP_SUCCESS:
      toastr.success('Signup success');
      break;
    case authActions.AUTH_FAILURE:
      toastr.error('Auth error');
      break;
    case recomendationActions.RECOMENDATION_CREATE_SUCCESS:
      toastr.success('Create success');
    default:
  }

  return next(action);
};
