import axios from "axios";

const localhost = 'http://localhost:8080';

const axiosApi = axios.create({
    baseURL: localhost,
});

export default axiosApi;
