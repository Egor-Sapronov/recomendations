import fetch from 'isomorphic-fetch';

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

export function getHeaders() {
  const token = localStorage.getItem('token');
  return {
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
}

export default function request(url, options) {
  return fetch(url, options)
    .then(status)
    .then(parseJson);
}
