import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const axiosConfig = axios.create({
    baseURL: 'your-api-endpoint',
    timeout: 10000,
});

// Interceptor for request
axiosConfig.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        if (token && config.headers) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Interceptor for response
axiosConfig.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            // Handle 401 Unauthorized error
            console.log('Unauthorized, redirecting or refreshing token...');
        }
        return Promise.reject(error);
    }
);

export default axiosConfig;