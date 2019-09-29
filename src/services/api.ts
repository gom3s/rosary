import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_ROSARY_API,
  headers: {'accept': 'application/json'},
  timeout: 5000,
});

export default api;
