import axios, { AxiosRequestConfig } from "axios";

const baseURL = "https://www.googleapis.com/books/v1/volumes/";
const applicationJSON = "application/json";

const instance = axios.create({
  baseURL,
  headers: {
    Accept: applicationJSON,
    "Content-Type": applicationJSON,
  },
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
