<template>
    <div>
        <el-row  class="container">
            <el-col :lg="16" :md="12"  class="flex items-center justify-center">
                <div class="text-light-50">
                    <div class=" font-bold text-5xl mb-4">欢迎光临</div>
                    <div>此站是《vue3 + vite实战商城后台开发》演示项目demo</div>
                </div>
            </el-col>
            <el-col :lg="8" :md="12"  class=" bg-light-50 flex items-center justify-center flex-col">
              <h2 class=" font-bold text-3xl text-gray-800">欢迎回来</h2>
              <div class="flex items-center justify-center my-5 text-gray-300 space-x-2">
                <span class="h-[1px] w-16 bg-gray-200"></span>
                <span>账号密码登录</span>
                <span class="h-[1px] w-16 bg-gray-200"></span>
              </div>
              <el-form
                ref="ruleFormRef"
                :model="ruleForm"
                :rules="rules"
                class="demo-ruleForm w-[250px]"
                :size="formSize"
                status-icon
                >
                  <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="请输入账号">
                    <template #prefix>
                      <el-icon class="el-input__icon"><User /></el-icon>
                    </template>
                    </el-input>
                  </el-form-item>
                  <el-form-item  prop="password">
                    <el-input v-model="ruleForm.password" placeholder="请输入密码" show-password>
                    <template #prefix>
                      <el-icon class="el-input__icon"><Lock /></el-icon>
                    </template>
                    </el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button class="w-[250px]" color="#626aef" round type="primary" :loading="loading" @click="submitForm(ruleFormRef)">登录</el-button>
                  </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  import { Lock, User } from '@element-plus/icons-vue'
  import { login,getinfo } from '@/api/manager'
  import { ElNotification } from 'element-plus'
  import { useRouter } from 'vue-router'
  import { useCookies } from '@vueuse/integrations/useCookies'
  const router = useRouter()
  const ruleForm = reactive({
    username:'admin',
    password:'admin'
  })
  const formSize = ref(null);
  const ruleFormRef = ref(null);
  const loading = ref(false)
  const rules = reactive({
    username:[
      { required: true, message: '账号不能为空', trigger: 'blur' }
    ],
    password:[
      { required: true, message: '密码不能为空', trigger: 'blur' },
      // { min: 6, max: 16, message: '密码长度需3~5位', trigger: 'blur' },
    ]
  })
  const submitForm = (formEl)=>{
    if(!formEl) return
    formEl.validate((valid) =>{
      if(!valid) return
      //执行loading
      loading.value = true
      let data = {
        username:ruleForm.username,
        password:ruleForm.password
      }
      login(data).then(res =>{
        //清除loading
        loading.value = false
        //提示成功
        ElNotification({
          title:'提示',
          message:'登录成功',
          type:'success',
          duration:3000
        })
        //设置cookie
        const cookie = useCookies()
        cookie.set('token',res.token);
        //调整到首页
        router.push('/')
      }).catch(err =>{
        ElNotification({
          title: '提示',
          message: err.msg || '请求错误',
          type: 'error',
          duration:3000
        })
      }).finally( ()=>{
        //清楚loading
        loading.value = false
      })
    })
  }
</script>

<style scoped>
  .container{
    @apply min-h-screen bg-purple-400;
  }
</style>