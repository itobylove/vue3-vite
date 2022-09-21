import axios from 'axios'
const server = axios.create({
    baseURL: '/api',
    timeout: 1000,
});
export default server