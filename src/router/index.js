import {createRouter,createWebHashHistory} from 'vue-router'
// import IndexRouter from '@/views/index/index.vue'
// import LoginRouter from '@/views/login/index.vue'
import IndexRouter from './modules/index.js'
import LoginRouter from './modules/login.js'
import NotfoundRouter from '@/views/notfound/index.vue'

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
export default router