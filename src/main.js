import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// vuelidate validering av formulär jm 20-09-18
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)



Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
