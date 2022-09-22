import {createRouter,createWebHashHistory} from 'vue-router'
// import IndexRouter from '@/views/index/index.vue'
// import LoginRouter from '@/views/login/index.vue'
import IndexRouter from './modules/index.js'
import LoginRouter from './modules/login.js'
import NotfoundRouter from '@/views/notfound/index.vue'
import { getToken } from '@/composables/auth'
import { toast,showFullLoading,hideFullLoading } from '@/composables/utils'
import store from '../store/index.js'

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
router.beforeEach(async (to, from, next) =>{
    showFullLoading()
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
    //如果用户登录了，自动获取登录用户信息，并存储在vuex中
    if(token){
        await store.dispatch('getinfo')
    }
    //设置页面标题
    let title = (to.meta.title ? to.meta.title : '') + '后台系统'
    document.title = title
    next()
})
//全局后置钩子
router.afterEach((to, from) => {
    hideFullLoading()
})
export default router