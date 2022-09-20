<template>
    <div>
        <el-row  class="min-h-screen bg-purple-400">
            <el-col :md="12" :lg="16" class="flex items-center justify-center">
                <div class="text-light-50">
                    <div class=" font-bold text-5xl mb-4">欢迎光临</div>
                    <div>此站是《vue3 + vite实战商城后台开发》演示项目demo</div>
                </div>
            </el-col>
            <el-col :span="12" :lg="8" class="bg-lime-200 flex justify-center items-center">
              <div>
                <h2>欢迎回来</h2>
                <div>
                  <span></span>
                  <span>账号密码登录</span>
                  <span></span>
                </div>
                <div>
                  <el-form
                  ref="ruleFormRef"
                  :model="ruleForm"
                  :rules="rules"
                  label-width="120px"
                  class="demo-ruleForm"
                  :size="formSize"
                  status-icon
                  >
                    <el-form-item label="Activity name" prop="username">
                      <el-input v-model="ruleForm.username" />
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  const ruleForm = reactive({
    username:'',
    password:''
  })
  const formSize = ref();
  const rules = reactive({
    username:[
      { required: true, message: 'Please input Activity name', trigger: 'blur' },
      { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ]
  })
  const submitForm = ()=>{
    console.log(123);
  }
</script>

<style lang="scss" scoped>

</style>