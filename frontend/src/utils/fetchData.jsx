import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

export const postApi = async (url, data) => {
  return await API.post(url, data);
};
export const getApi = async (url) => {
  return await API.get(url);
};