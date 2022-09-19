import axios from 'axios';
import { API_URL } from '@/config/Config';

export const API = axios.create({ baseURL: API_URL, timeout: 3000 });
