import axios from "axios";
import tokenService from "./token";
import { useNavigate } from 'react-router-dom';


const apiUrl:string = import.meta.env.REACT_APP_API_URL
const navigate = useNavigate();

const axiosInstance = axios.create({
    baseURL:apiUrl
  });
  
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${tokenService.getToken()}`;
    config.headers['Content-Type'] = 'application/json'
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url !== `${apiUrl}Account/register`
    ) {
        navigate('/signup');
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;