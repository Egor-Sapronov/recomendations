import request, { getHeaders } from './request';

const URL = {
    recomendations: '/api/recomendations',
    preview: '/api/preview',
    profiles: '/api/profiles',
    auth: '/api/auth',
    users: '/api/users',
    userinfo: '/api/users/me',
    nextRecomandation: '/api/recomendations/next',
    likes: '/api/recomendations/likes',
    top: '/api/recomendations/top',
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
    profilePosts(id = 'me') {
        return request(`${URL.users}/${id}/posts`, {
            method: 'GET',
            headers: getHeaders(),
        })
        .then(response => response.posts);
    },
    likes() {
        return request(URL.likes, {
            method: 'GET',
            headers: getHeaders(),
        })
        .then(response => response.posts);
    },
    top() {
        return request(URL.top, {
            method: 'GET',
            headers: getHeaders(),
        })
        .then(response => response.posts);
    }
};
