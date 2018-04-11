<template>
  <div id="login">
    <el-form :modal="userInfor" ref="userInfor" label-width="80px">
      <p class="title">登录</p>
      <el-form-item required label="用户名">
        <el-input v-model="userInfor.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item required label="密码">
        <el-input v-model="userInfor.password" placeholder="请设置密码"></el-input>
      </el-form-item>
      <el-form-item label-width="0px">
        <el-button size="small" type="primary" @click.native="submit()">登录</el-button>
        <p style="margin: 0;line-height: 0;text-align: right;"><el-button @click.native="register()" style="padding: 0;" type="text">立即注册</el-button></p>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import http from 'axios'
export default {
  data () {
    return {
      userInfor: {
        name: '刘家禄',
        password: '123123'
      }
    }
  },
  methods: {
    submit () {
      if (this.userInfor.name === '' || this.userInfor.password === '') {
        this.$message({
          message: '请输入完整信息',
          type: 'warning'
        })
        return false
      }
      http.post('/api/login', {
        userInfor: this.userInfor
      }).then(res => {
        if (res.data.id === 0) {
          this.$message({
            message: res.data.msg,
            type: 'error'
          })
        } else {
          localStorage.setItem('token', res.data.token)
          this.$router.push('/home')
        }
      }).catch(err => {
        console.log(err)
      })
    },
    register () {
      this.$router.push('/register')
    }
  },
  mounted () {
    console.log(localStorage.getItem('ua'))
  }
}
</script>

<style scoped>
#login{
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
#login .el-form{
  width: 300px;
  margin: 200px auto;
  padding: 32px 40px 10px;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, .2);
  border-radius: 8px;
}
#login .el-form .title{
  margin: 0 0 22px 0;
  color: #606266;
}
</style>
