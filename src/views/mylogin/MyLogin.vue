<template>
  <div id="my-login">
      <el-form :model="loginForm" :rules = "rules" ref="loginForm" label-width="150px" class="login-ruleForm">
          <el-form-item label="用户名" for="username" prop="username">
              <el-input  id="username" v-model="loginForm.username"
                         placeholder="用户名"></el-input>
          </el-form-item>
            <el-form-item for="password" label="密码" prop="password" >
              <el-input id="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>

export default {
    name: "MyLogin",
    data () {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    {required: true, message: '请输入用户名', tigger: blur}
                ],
                password: [
                    {required: true, message: '请输入密码', tigger: blur}
                ]
            }
        }
    },
    methods: {
        // 1. 登录验证
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if(valid) {
                    // 后台springsecurity验证时,必须是这种类型格式数据的post请求才能收到name和password
                    this.$http.post(`/login?username=${this.loginForm.username}
                    &password=${this.loginForm.password}`)
                    .then(res=> {
                        let data = res.data
                        if(data.code == 200)
                        {
                            this.$notify({
                                title: 'success',
                                message: '登录成功!',
                                type: 'success',
                                position: 'top-center'
                            })
                            this.$router.push('/home')
                        }else{
                                this.$notify({
                                title: 'error',
                                message: data.msg,
                                type: 'error',
                                position: 'top-center'
                            })
                        }
                    })
                }else {
                    return false
                }
            })
        }
    }

}
</script>

<style scoped>
     #my-login {

     }
    .login-ruleForm {
        position: relative;
        padding-top: 100px;
        width: 400px;
        margin: auto auto;
    }
</style>