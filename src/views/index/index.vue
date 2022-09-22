<template>
    <div>
        {{ $store.state.user.totalCount }}
        <el-button @click="handleLogout">退出登录</el-button>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { getinfo,logout } from '@/api/manager'
import { useStore } from 'vuex'
import { toast,showModal } from '@/composables/utils'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()
onMounted(() =>{
    // //获取管理员列表
    // let data = {
    //     limit:10,
    //     keyword:''
    // }
    // getinfo(data).then(ret =>{
    //     console.log(ret);
    //     store.commit('SET_USERINFO',ret)
    // })
})
function handleLogout(){
    showModal('你确定要退出登录吗?').then(() =>{
        logout().then((res) =>{
            store.dispatch('logout')
            //跳转到登录页面
            router.push('/login')
            toast('退出成功')
        })
    }).catch((action) =>{
        if(action == 'cancel'){
            console.log('cancel');
        }else{
            console.log('close');
        }
    })
}
</script>

<style lang="scss" scoped>

</style>