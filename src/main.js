// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'

import('bootstrap-vue/dist/bootstrap-vue.css')


Vue.use(BootstrapVue);
Vue.use(Vuex)

window.axios = Axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
