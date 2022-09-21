import {createRouter,createWebHashHistory} from 'vue-router'
// import IndexRouter from '@/views/index/index.vue'
// import LoginRouter from '@/views/login/index.vue'
import IndexRouter from './modules/index.js'
import LoginRouter from './modules/login.js'
import NotfoundRouter from '@/views/notfound/index.vue'
import { getToken } from '@/composables/auth'
import { toast } from '@/composables/utils'

const routes = [
    IndexRouter,
    LoginRouter,
    // {
    //     path:'/',
    //     component:IndexRouter
    // },
    // {
    //     path:'/login',
    //     component:LoginRouter
    // },
    {
        
        path:'/:pathMatch(.*)*',name:'NotFoundRouter',component:NotfoundRouter
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes:[...routes]
})
//路由前置全局前置守卫
router.beforeEach((to, from, next) =>{
    const token = getToken()
    //未登录，强制跳转到登录页面
    if(!token && to.path != '/login'){
        toast('请先登录','error')
        return next({ path: '/login'})
    }
    //防止重复登录
    if(token && to.path == '/login'){
        toast('请勿重复登录','error')
        return next({ path: from.path ? from.path : '/'})
    }
    next()
})
export default router