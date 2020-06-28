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
// import {request} from 'network/';
// import axios from 'axios';

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
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if(valid) {
                    this.$http({
                        url: this.$http.adornUrl('/login'),
                        method: 'post',
                          data: {
                            userName: this.loginForm.username,
                            password: this.loginForm.password
                        }
                    }).then(res=>{
                        console.log(res)
                        this.$router.replace('/home')
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