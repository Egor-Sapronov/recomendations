import { api } from '../api/api';

import { errorSymbol, loadingSymbol } from '../utils/symbols';

export const GET_PROFILE_START = 'GET_PROFILE_START';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';

export const GET_PROFILE_POSTS_START = 'GET_PROFILE_POSTS_START';
export const GET_PROFILE_POSTS_SUCCESS = 'GET_PROFILE_POSTS_SUCCESS';
export const GET_PROFILE_POSTS_FAILURE = 'GET_PROFILE_POSTS_FAILURE';

export function getPostsStart() {
    return {
        type: GET_PROFILE_POSTS_START,
        [loadingSymbol]: true,
    };
}

export function getPostsSuccess(posts) {
    return {
        type: GET_PROFILE_POSTS_SUCCESS,
        [loadingSymbol]: false,
        posts,
    };
}

export function getPostsFailure(error) {
    return {
        type: GET_PROFILE_POSTS_FAILURE,
        [loadingSymbol]: false,
        [errorSymbol]: error,
    };
}

export const getProfilePosts = (id) => (dispatch) => {
    dispatch(getPostsStart());
    return api
        .profilePosts(id)
        .then(posts => dispatch(getPostsSuccess(posts)))
        .catch(error => dispatch(getPostsFailure(error)));
};

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
        })
        .catch(error => {
            return dispatch(getProfileFailure(error));
        });
};
