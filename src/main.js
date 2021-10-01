import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
axios.defaults.baseURL='http://localhost:8000/api'


Vue.prototype.$http=axios
Vue.use(VueAxios,axios)
const token=localStorage.getItem('token')
if (token){
  Vue.prototype.$http.defaults.headers.common['Authorization']='Bearer '+token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
