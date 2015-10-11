// import fetch from 'whatwg-fetch';

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJson(response) {
  return response.json();
}

const URL = {
  recomendations: '/api/recomendations',
  auth: '/api/auth',
};

export const api = {
  auth(email, password) {
    const authData = btoa(`${email}:${password}`);

    return fetch(URL.auth, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Basic ${authData}`,
      },
    })
      .then(status)
      .then(parseJson);
  },
  postRecomendation({image, content}) {
    const formData = new FormData();

    formData.append('image', image);
    formData.append('content', content);

    return fetch(URL.recomendations, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData,
    })
      .then(status)
      .then(parseJson);
  },
};
