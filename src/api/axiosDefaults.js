import axios from "axios";

axios.defaults.baseURL = "https://drf-api-code-institute-915faa2a0d75.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();