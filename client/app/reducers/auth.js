import * as authActions from '../actions/auth';

export default function auth(state = {}, action) {
  switch (action.type) {
    case authActions.SIGNIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case authActions.USERINFO_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case authActions.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case authActions.AUTH_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return {
        ...state,
        isAuthenticated: false,
      };
  }
}
