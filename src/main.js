import Vue from 'vue'
<<<<<<< HEAD
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
=======
import './plugins/vuetify'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
>>>>>>> 42f4983982806422e1664cc34a814f90f8896d62

Vue.config.productionTip = false

new Vue({
<<<<<<< HEAD
  vuetify,
  router,
  store,
  render: h => h(App)
=======
	vuetify,
	router,
	render: h => h(App)
>>>>>>> 42f4983982806422e1664cc34a814f90f8896d62
}).$mount('#app')
