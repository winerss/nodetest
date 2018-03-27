<template>
  <div>
    <h1>组件1</h1>
    <p>{{n}}</p>
    <p>{{m}}</p>
    <button @click="changeCount">+</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      n: this.$store.state.count // n的初始化从state拿
    }
  },
  computed: {
    m () {
      return this.$store.state.count
    }
  },
  methods: {
    changeCount () {
      // 改变state状态
      this.$store.commit('updateCount', {
        add: 10
      })
    }
  }
}
</script>
