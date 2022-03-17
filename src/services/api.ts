import axios from 'axios';
import { API_SERVER } from '../configs/constant';

const api = axios.create({
    baseURL: API_SERVER,
    /* headers: { "Content-Type": "application/json" }, */
});

export default api;