<template>
  <div id="register">
    <el-form :modal="userInfor" ref="userInfor" label-width="80px">
      <p class="title">用户注册</p>
      <el-form-item required label="用户名">
        <el-input v-model="userInfor.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item required label="密码">
        <el-input v-model="userInfor.password" placeholder="请设置密码"></el-input>
      </el-form-item>
      <el-form-item required label="确认密码">
        <el-input v-model="userInfor.repassword" placeholder="请确认密码"></el-input>
      </el-form-item>
      <el-form-item label-width="0px">
        <el-button size="small" type="primary" @click.native="submit()">立即创建</el-button>
        <el-button size="small" @click.native="delData()">清空内容</el-button>
        <p style="margin: 0;line-height: 0;text-align: right;"><el-button @click.native="login()" style="padding: 0;" type="text">已有账号</el-button></p>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfor: {
        name: '',
        password: '',
        repassword: ''
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
      if (this.userInfor.password !== this.userInfor.repassword) {
        this.$message({
          message: '密码不一致',
          type: 'warning'
        })
        return false
      }
      this.axios.post('/api/register', {
        userInfor: this.userInfor
      }).then(res => {
        if (res.data.id !== 2) {
          this.$message({
            message: res.data.msg,
            type: 'error'
          })
        } else {
          this.$message({
            message: res.data.msg,
            type: 'success'
          })
          this.$router.push('/login')
        }
      }).catch(err => {
        console.log(err)
      })
    },
    delData () {
      for (let i in this.userInfor) {
        if (this.userInfor[i]) {
          this.userInfor[i] = ''
          this.$message({
            message: '内容已清空',
            type: 'success'
          })
        }
      }
    },
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
#register{
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
#register .el-form{
  width: 400px;
  margin: 200px auto;
  padding: 32px 40px 10px;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, .2);
  border-radius: 8px;
}
#register .el-form .title{
  margin: 0 0 22px 0;
  color: #606266;
}
</style>
