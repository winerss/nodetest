import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

// 定义store
let state = {
  count: 10 // 定义一个状态
}
export default new Vuex.Store({
  state,
  mutations
})
