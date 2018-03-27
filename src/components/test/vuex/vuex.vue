<template>
  <div>
    <vuex1/>
    <vuex2/>
  </div>
</template>

<script>
import vuex1 from './vuex1'
import vuex2 from './vuex2'
export default {
  name: 'vuex',
  data () {
    return {}
  },
  components: {
    vuex1,
    vuex2
  }
}
</script>

<style scoped>
</style>
