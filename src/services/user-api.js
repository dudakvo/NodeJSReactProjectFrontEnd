import axios from 'axios';
import { BASE_URL } from '../helpers/constants';

axios.defaults.baseURL = BASE_URL;

export async function register(credentials) {
  const { data } = await axios.post('/users/signup', credentials);
  return data;
}

export async function logIn(credentials) {
  const { data } = await axios.post('/users/login', credentials);
  return data;
}

export async function logOut() {
  const { data } = await axios.post('/users/logout');
  return data;
}

export async function getCurrentUser() {
  const { data } = await axios.get('/users/current');
  return data;
}
