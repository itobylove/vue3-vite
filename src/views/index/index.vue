<template>
    <div>
        {{ $store.state.user.username }}
        <el-button @click="logout">退出登录</el-button>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { getinfo } from '@/api/manager'
import { useStore } from 'vuex'
import { showModal } from '@/composables/utils'
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
function logout(){
    showModal('你确定要退出登录吗?').then(() =>{
        console.log('确定操作');
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