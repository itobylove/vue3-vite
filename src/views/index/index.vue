<template>
    <div>
        {{ $store.state.user }}
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { getinfo } from '@/api/manager'
import { useStore } from 'vuex'
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
</script>

<style lang="scss" scoped>

</style>