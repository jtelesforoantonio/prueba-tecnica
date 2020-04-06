import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.interceptors.request.use(config => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }

  return config;
}, error => Promise.reject(error));

export default axios;
