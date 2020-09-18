import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store/index'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root= 'https://vuejs-stock-trader-8b558.firebaseio.com/'
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
