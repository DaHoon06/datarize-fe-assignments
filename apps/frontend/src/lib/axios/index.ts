import axios, {AxiosInstance} from "axios";

const baseURL = 'http://localhost:4000/api';
const instance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
});

export const axiosInstance = instance;
