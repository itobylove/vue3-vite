export default {
    path:'/login',
    name:'login',
    mate:{
        title:'登录'
    },
    component: () => import('@/views/login/index.vue')
}