import axios from 'axios'

export const urlApi = axios.create({
    baseURL: 'http://localhost:5000/api/registro'
});