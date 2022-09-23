import axios from 'axios';

export const API_URL = 'http://localhost:8096';

export const API = axios.create({ baseURL: API_URL, timeout: 3000 });
