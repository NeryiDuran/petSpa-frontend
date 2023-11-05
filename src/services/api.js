import axios from "axios";

export const API = import.meta.env.VITE_URL_API;

export const instanceAPI = axios.create({baseURL: API});
