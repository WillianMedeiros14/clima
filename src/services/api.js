import axios from 'axios';

export const key = 'd3bf8883';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;