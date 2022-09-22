import { createApp } from 'vue'
import './style.css'
//引入element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
//引入路由
import router from './router'
//引入store(vuex)
import store from '@/store'
const app = createApp(App)
app.use(ElementPlus)
import 'virtual:windi.css'
app.use(router)
// 将 store 实例作为插件安装
app.use(store)
//引入nprogress
import 'nprogress/nprogress.css'
app.mount('#app')
