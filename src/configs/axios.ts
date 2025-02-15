import axios, { type AxiosInstance } from "axios";

// Env
import { env } from "./environment";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: env.BASE_API,
});

export default axiosInstance;
