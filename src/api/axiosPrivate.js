import axios from "axios";
const BASE_URL = "https://52c0-49-37-70-219.ngrok.io/api";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
//   withCredentials: true,
});
