import request, {getHeaders} from './request';

const URL = {
    recomendations: '/api/recomendations',
    auth: '/api/auth',
    userinfo: '/api/users/me',
    nextRecomandation: '/api/recomendations/next',
};


export const api = {
    like(id) {
        return request(`${URL.recomendations}/${id}/likes`, {
            method: 'POST',
            headers: getHeaders(),
        })
        .then(response => response.like);
    },

    dislike(id) {
        return request(`${URL.recomendations}/${id}/dislikes`, {
            method: 'POST',
            headers: getHeaders(),
        })
        .then(response => response.like);
    },

    next() {
        return request(URL.nextRecomandation, {
            method: 'GET',
            headers: getHeaders(),
        })
        .then(response => response.recomendation);
    },

    userifno() {
        return request(URL.userinfo, {
            method: 'GET',
            headers: getHeaders(),
        })
        .then(response => response.user);
    },

    postRecomendation({
    image,
    content,
  }) {
    const formData = new FormData();

    formData.append('image', image);
    formData.append('content', content);

    return request(URL.recomendations, {
      method: 'POST',
      headers: getHeaders(),
      body: formData,
    });
  },
};
