import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common['Authorization'] = '';
};

export async function signUp(credentials) {
  const { data } = await instance.post('/users/signup', credentials);
  setToken(data.token);
  return data;
}

export async function signIn(credentials) {
  const { data } = await instance.post('/users/login', credentials);
  setToken(data.token);
  return data;
}

export async function signOut() {
  const { data } = await instance.post('/users/logout');
  clearToken();
  return data;
}

export async function refresh(token) {
  setToken(token);
  const { data } = await instance('/users/current');
  return data;
}
