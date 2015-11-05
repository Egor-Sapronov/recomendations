import { api } from '../api/api';

import { errorSymbol, loadingSymbol } from '../utils/symbols';

export const GET_PROFILE_START = 'GET_PROFILE_START';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';

export function getProfileStart() {
    return {
        type: GET_PROFILE_START,
        [loadingSymbol]: true,
    };
}

export function getProfileSuccess(profile) {
    return {
        type: GET_PROFILE_SUCCESS,
        [loadingSymbol]: false,
        profile,
    };
}

export function getProfileFailure(error) {
    return {
        type: GET_PROFILE_FAILURE,
        [loadingSymbol]: false,
        [errorSymbol]: error,
    };
}

export const getProfile = (id) => (dispatch) => {
    dispatch(getProfileStart());
    return api
        .profile(id)
        .then(profile => {
            return dispatch(getProfileSuccess(profile));
        });
};
