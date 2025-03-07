import axios from '../utils/axiosConfig';

export const companyApi = {
    getCompanies: () => axios.get('https://api.thecompaniesapi.com/v2/companies'),
    //getCompanies: () => api.get('/companies'),
};