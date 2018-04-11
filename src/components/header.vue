<template>
  <div id="header">
    <div class="top">
      <div class="logo"><img :src="img.logo" alt=""></div>
      <el-button style="float: right; margin: 20px 5%" @click="logout()" type="primary" size="mini">退出</el-button>
    </div>
    {{ua}}
    <div class="navbar">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="item in navbar" :key="item.id" label="用户管理" :name="item.key"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import logo from '../img/logo.jpg'
export default {
  data () {
    return {
      img: {
        logo: logo
      },
      navbar: [],
      activeName: '1'
    }
  },
  methods: {
    getData () {
      this.axios.post('/api/navbar')
        .then(res => {
          this.navbar = res.data.navbar
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    logout () {
      localStorage.removeItem('token')
      this.$router.push('login')
    }
  },
  computed: {
    ua () {
      return this.$store.state.ua.ua
    }
  }
}
</script>

<style scoped>
#header .top{
  height: 80px;
}
.logo img{
  height: 40px;
  width: 40px;
  border-radius: 50%;
  float: left;
  margin: 20px 5%;
}
#header .navbar{
  width: 90%;
  margin: 0 auto;
}
</style>
