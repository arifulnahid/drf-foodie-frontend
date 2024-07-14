import axios from "axios";

export const api = axios.create({
    baseURL: 'https://drf-foodie.onrender.com'
})