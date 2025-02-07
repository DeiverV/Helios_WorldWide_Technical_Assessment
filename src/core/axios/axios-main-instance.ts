/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from "axios";

const API_BASE_URL: string = import.meta.env.VITE_QUIZ_API_BASE_URL as string;
const QUIZ_API_TOKEN: string = import.meta.env.VITE_QUIZ_API_TOKEN as string;

const createAxiosInstance = (config: AxiosRequestConfig) => {
  return axios.create(config);
};

const axiosInstanceBasic = createAxiosInstance({
  baseURL: API_BASE_URL,
  headers: {
    "X-Api-Key": QUIZ_API_TOKEN,
  },
});

export { axiosInstanceBasic };
