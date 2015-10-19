import toastr from 'toastr';
import * as authActions from '../actions/auth';
import * as recomendationActions from '../actions/recomendation';

export const toaster = store => next => action => {
  switch (action.type) {
    case authActions.SIGNIN_SUCCESS:
      toastr.success('Signin success');
    case authActions.SIGNUP_SUCCESS:
      toastr.success('Signup success');
    case authActions.AUTH_FAILURE:
      toastr.error('Auth error');
    case recomendationActions.RECOMENDATION_CREATE_SUCCESS:
      toastr.success('Create success');
    default:
  }

  return next(action);
};