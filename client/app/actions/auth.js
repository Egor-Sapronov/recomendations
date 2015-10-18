import {api} from '../api/api';

export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const USERINFO_SUCCESS = 'USERINFO_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export function authFailure() {
  return {
    type: AUTH_FAILURE,
  };
}

export function signinSuccess(data) {
  return {
    type: SIGNIN_SUCCESS,
    data,
  };
}

export function signupSuccess(data) {
  return {
    type: SIGNUP_SUCCESS,
    data,
  };
}

export function userinfoSuccess(data) {
  return {
    type: USERINFO_SUCCESS,
    data,
  };
}

export function getUserinfo() {
  return (dispatch) => {
    return api
      .userifno()
      .then(response=> dispatch(userinfoSuccess(response)))
      .catch(err=> dispatch(authFailure()));
  };
}

export function signin({email, password}) {
  return (dispatch) => {
    return api
      .signin(email, password)
      .then(response=> dispatch(signinSuccess(response)))
      .catch(err=> dispatch(authFailure()));
  };
}

export function signup({email, password}) {
  return (dispatch) => {
    return api
      .signup(email, password)
      .then(response=> dispatch(signupSuccess(response)))
      .catch(err=> dispatch(authFailure()));
  };
}
