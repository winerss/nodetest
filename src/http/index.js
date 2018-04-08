// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
import router from '../router'
// 超时时间
axios.defaults.timeout = 2000
// http请求拦截器
axios.interceptors.request.use(config => {
  let token = localStorage.getItem('token')
  if (token) {
    config.headers.token = token
  }
  return config
}, error => {
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(response => {
  switch (response.data.status) {
    case 8001:
      router.push('/login')
  }
  return response
}, error => {
  return Promise.reject(error)
})
export default axios
