<template>
  <div id="header">
    <div class="header">
      <p>欢迎光临，材帮帮竭诚为您服务！</p>
      <p>客服热线：400-820-3221</p>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="item in navbar" :key="item.id" :label="item.name" :name="item.id"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 0,
      navbar: []
    }
  },
  methods: {
    getData () {
      this.axios
        .post('http://192.168.6.102:3000/home')
        .then(res => {
          this.navbar = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleClick (tab, event) {
      this.axios
        .post('http://192.168.6.102:3000/content', {
          id: tab.index
        })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>
#header {
  width: 80%;
  margin: 0 auto;
}
#header .header{
  display: flex;
}
</style>
