import axios from 'axios';

export const API_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8096';

export const API = axios.create({ baseURL: API_URL, timeout: 3000 });
