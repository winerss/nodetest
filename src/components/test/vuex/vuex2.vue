<template>
  <div>
    <h1>组件2</h1>
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
      this.$store.commit('updateCount', {
        add: 20
      })
    }
  }
}
</script>
