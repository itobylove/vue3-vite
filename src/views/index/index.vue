<template>
    <div>
        index
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { getinfo } from '@/api/manager'
onMounted(() =>{
    //获取管理员列表
    let data = {
        limit:10,
        keyword:''
    }
    getinfo(data).then(ret =>{
        console.log(ret);
    })
})
</script>

<style lang="scss" scoped>

</style>