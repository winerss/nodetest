<template>
  <div id="app">
    {{ua}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    ua () {
      return this.$store.state.ua.ua
    }
  },
  methods: {
    changeUa () {
      // 改变state状态
      this.$store.commit('updateUa', {
        ua: 'ua'
      })
    }
  },
  mounted () {
    this.changeUa()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
}
</style>
