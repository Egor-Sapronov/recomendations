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
};

export const api = {
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
  }
};