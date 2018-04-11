
// 定义store
let mutations = {
  updateCount (state, payload) {
    state.count += payload.add
  },
  updateUa (state, payload) {
    state.ua = payload
  }
}
export default mutations
