import axios from "axios";

const API = axios.create({
  baseURL:  "https://tla-certificate-verify-backend.onrender.com/api",
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const api = API;
export default API;
