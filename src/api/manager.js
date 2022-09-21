import server from '@/utils/axios'
export const login = (data) =>{
    return server.post('/admin/login',data)
}
// export function login(username,password){
//     return server.post('/admin/login',{
//         username:username,
//         password:password
//     })
// }