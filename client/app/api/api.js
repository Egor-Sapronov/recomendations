import request, { getHeaders } from './request';

const URL = {
    recomendations: '/api/recomendations',
    preview: '/api/preview',
    profiles: '/api/profiles',
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
    getPost(id) {
        return request(`${URL.recomendations}/${id}`, {
            method: 'GET',
            headers: getHeaders(),
        })
        .then(response => response.recomendation);
    },
    profile(id = 'me') {
        return request(`${URL.profiles}/${id}`, {
            method: 'GET',
            headers: getHeaders(),
        })
        .then(response => response.profile);
    },
    userifno() {
        return request(URL.userinfo, {
            method: 'GET',
            headers: getHeaders(),
        })
        .then(response => response.user);
    },
    getPreview(content) {
        return request(`${URL.preview}?preview=${encodeURI(content)}`, {
            method: 'GET',
            headers: getHeaders(),
        })
        .then(response => response.data);
    },
    postRecomendation(data) {
        return request(URL.recomendations, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(data),
        });
    },
};
