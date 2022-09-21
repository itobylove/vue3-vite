import axios from 'axios'
import { useCookies } from '@vueuse/integrations/useCookies'
const server = axios.create({
    baseURL: '/api',
    timeout: 10000,
});
// 添加请求拦截器
server.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const cookie = useCookies()
    const token = cookie.get('token')
    if(token){
        config.headers['token'] = token
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
server.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    //后端返回的是result.data.data,此次这样写法，
    //便于页面直接使用res即可获取到接口数据
    //不同项目要看接口返回的数据格式是怎样的
    return response.data.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default server