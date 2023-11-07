import axios from "axios";

const api = axios.create({
    baseURL: 'https://task-manager-production-15c6.up.railway.app/', // Insira a URL da API de desenvolvimento
});

export default api;