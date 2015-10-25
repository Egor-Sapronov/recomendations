import {api} from '../api/api';

export const USERINFO_SUCCESS = 'USERINFO_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export function authFailure() {
  return {
    type: AUTH_FAILURE,
  };
}

export function userinfoSuccess(user) {
  return {
    type: USERINFO_SUCCESS,
    user,
  };
}

export function getUserinfo() {
  return (dispatch) => {
    return api
      .userifno()
      .then(user => {
        return dispatch(userinfoSuccess(user));
      });
  };
}
