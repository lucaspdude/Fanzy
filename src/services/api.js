import axios from 'axios';

const local = 'http://localhost:8000/api';
const api = axios.create({
  baseURL: 'http://localhost:7000/api',
});

export default api;
 