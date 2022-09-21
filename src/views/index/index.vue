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
    getinfo(1).then(ret =>{
        console.log(ret);
    })
})
</script>

<style lang="scss" scoped>

</style>