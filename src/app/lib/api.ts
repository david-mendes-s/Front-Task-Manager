import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080', // Insira a URL da API de desenvolvimento
});

export default api;