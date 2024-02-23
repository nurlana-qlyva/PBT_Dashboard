import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: import.meta.env.VITE_API_AUTHORIZATION,
  },
});

AxiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.request.use(function (request) {
  return request;
});

export default AxiosInstance;
