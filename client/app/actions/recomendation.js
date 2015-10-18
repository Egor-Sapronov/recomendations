import {api} from '../api/api';

export const NEXT_RECOMENDATION_SUCCESS = 'NEXT_RECOMENDATION_SUCCESS';
export const LIKE_SUCCESS = 'LIKE_SUCCESS';

export function nextRecomandationSuccess(recomendation) {
  return {
    type: NEXT_RECOMENDATION_SUCCESS,
    recomendation,
  };
}

export function likeSuccess(likeValue) {
  return {
    type: LIKE_SUCCESS,
    like: likeValue,
  };
}

export function like(id) {
  return (dispatch) => {
    return api.like(id)
      .then(likeValue=> dispatch(likeSuccess(likeValue)))
      .then(() => dispatch(getNext()));
  };
}

export function dislike(id) {
  return (dispatch) => {
    return api.dislike(id)
      .then(likeValue=> dispatch(likeSuccess(likeValue)))
      .then(() => dispatch(getNext()));
  };
}

export function getNext() {
  return (dispatch) => {
    return api
      .next()
      .then(recomendation=> dispatch(nextRecomandationSuccess(recomendation)));
  };
}
