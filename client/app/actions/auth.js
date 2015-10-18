import {api} from '../api/api';

export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

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

export function signin({email, password}) {
  return (dispatch) => {
    return api
      .signin(email, password)
      .then(response=> {
        return dispatch(signinSuccess(response));
      });
  };
}

export function signup({email, password}) {
  return (dispatch) => {
    return api
      .signup(email, password)
      .then(response=> {
        return dispatch(signupSuccess(response));
      });
  };
}
