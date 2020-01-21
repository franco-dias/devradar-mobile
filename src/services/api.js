import axios from 'axios';

const api = axios.create({
  // 10.0.2.2 para android
  baseURL: 'http://192.168.100.91:3333'
})

export default api;