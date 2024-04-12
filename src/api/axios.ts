import axios from 'axios';

export const axiosIntance = axios.create({
  baseURL: 'http://warrio.ge/api/',
  headers: {
    "Content-Type": "application/json",
  },
});