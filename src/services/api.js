import axios from "axios";

export const API = 'http://locahost:8080/';

export const instanceAPI = axios.create({baseURL: API});
