import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333'
  // baseURL: 'http://187.65.109.164:3333'
});

export default api;

// 10.0.3.2