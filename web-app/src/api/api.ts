import axios, { AxiosInstance } from 'axios';

import Config from '../app.config';


const api: AxiosInstance = axios.create({
  baseURL: Config.API_URL,
  timeout: Config.API_REQUEST_TIMEOUT_MS,
  withCredentials: true,
  headers: Config.API_HEADERS,
});


api.interceptors.request.use((request) => {

  // Debug mode to log all requests before they are sent
  if (Config.LOG_API_REQUEST) {
    console.log('Starting Request', JSON.stringify(request, null, 2));
  }

  return request;
},
(error) => {
  return Promise.reject(error);
});


export default api;
