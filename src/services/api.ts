import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.3.40:3000',
});

export default api;