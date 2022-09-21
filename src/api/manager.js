import server from '@/utils/axios'
//登录
export const login = (data) =>{
    return server.post('/admin/login',data)
}
// export function login(username,password){
//     return server.post('/admin/login',{
//         username:username,
//         password:password
//     })
// }
// 获取管理员列表
export function getinfo(page){
    return server.get('/admin/manager/'+page)
}