import server from '@/utils/axios'
//登录
//post写法一
// export const login = (data) =>{
//     return server.post('/admin/login',data)
// }
//post写法二
export const login = (data) =>{
    return server({
        url:`/admin/login`,
        method:'POST',
        data:data
    })
}
// export function login(username,password){
//     return server.post('/admin/login',{
//         username:username,
//         password:password
//     })
// }
// 获取管理员列表
//get写法一
export function getinfo(page){
    return server.get('/admin/manager/1',{params:page})
}
//get写法二
// export function getinfo(params){
//     return server({
//         url:`/admin/manager/1`,
//         method:'GET',
//         params
//     })
// }
//退出登录
export function logout(){
    return server.post('/admin/logout')
}