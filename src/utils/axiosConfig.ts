import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const axiosConfig = axios.create({
    baseURL: 'your-api-endpoint', // Thay bằng URL API thật
    timeout: 10000, // Thời gian chờ tối đa (10 giây)
});

// Interceptor cho request
axiosConfig.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // Thêm logic trước khi gửi request
        console.log('Request gửi đi:', config);
        // Ví dụ: Thêm header Authorization nếu có token
        const token = localStorage.getItem('token'); // Giả lập lấy token
        if (token && config.headers) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        // Xử lý lỗi request
        console.error('Lỗi request:', error);
        return Promise.reject(error);
    }
);

// Interceptor cho response
axiosConfig.interceptors.response.use(
    (response: AxiosResponse) => {
        // Xử lý response trước khi trả về
        console.log('Response nhận được:', response);
        return response;
    },
    (error: AxiosError) => {
        // Xử lý lỗi response
        console.error('Lỗi response:', error.response?.status, error.response?.data);
        if (error.response?.status === 401) {
            // Ví dụ: Xử lý lỗi 401 (Unauthorized)
            console.log('Token hết hạn, đăng xuất...');
        }
        return Promise.reject(error);
    }
);

export default axiosConfig;