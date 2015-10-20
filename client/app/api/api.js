// import fetch from 'whatwg-fetch';

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJson(response) {
  return response.json();
}

const URL = {
  recomendations: '/api/recomendations',
  auth: '/api/auth',
  userinfo: '/api/users/me',
  nextRecomandation: '/api/recomendations/next',
};

let token = localStorage.getItem('token');

export const api = {
  like(id) {
      return fetch(`${URL.recomendations}/${id}/likes`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        })
        .then(status)
        .then(parseJson)
        .then(response => response.like);
    },
    dislike(id) {
      return fetch(`${URL.recomendations}/${id}/dislikes`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        })
        .then(status)
        .then(parseJson)
        .then(response => response.like);
    },
    next() {
      return fetch(URL.nextRecomandation, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        })
        .then(status)
        .then(parseJson)
        .then(recomendation => recomendation.recomendation);
    },
    userifno() {
      return fetch(URL.userinfo, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        })
        .then(status)
        .then(parseJson)
        .then(response => response);
    },
    signin(email, password) {
      const authData = btoa(`${email}:${password}`);

      return fetch(URL.auth, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Basic ${authData}`,
          },
        })
        .then(status)
        .then(parseJson)
        .then(response => {
          token = response.token;
          localStorage.setItem('token', response.token);

          return response;
        });
    },
    signup(email, password) {
      return fetch(URL.auth, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        })
        .then(status)
        .then(parseJson)
        .then(response => {
          token = response.token;
          localStorage.setItem('token', response.token);

          return response;
        });
    },
    postRecomendation({
      image, content
    }) {
      const formData = new FormData();

      formData.append('image', image);
      formData.append('content', content);

      return fetch(URL.recomendations, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: formData,
        })
        .then(status)
        .then(parseJson);
    },
};
