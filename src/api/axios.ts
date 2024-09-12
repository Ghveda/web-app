import axios from 'axios';
import Cookies from 'js-cookie';

export const axiosIntance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosIntance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('accessToken');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
