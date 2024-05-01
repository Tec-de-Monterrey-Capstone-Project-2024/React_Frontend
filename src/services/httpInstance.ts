import config from "../config";
import axios from "axios";

const httpInstance = axios.create({
    baseURL: config.API_URL,
})

httpInstance.interceptors.request.use(
    async ( config ) => {
        const newConfig = { ...config };

        return newConfig;
    }, ( error ) => {
        return Promise.reject(error);
    }
);

httpInstance.interceptors.response.use(
    (response) => {
        return response;
    }, (error) => {
        return Promise.reject(error);
    }
);

export default httpInstance;