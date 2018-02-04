// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'
import Vuex from 'vuex'
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import vueTopProgress from 'vue-top-progress'

import('bootstrap-vue/dist/bootstrap-vue.css')
import('./css/font-awesome/css/fontawesome-all.css')

Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(vueTopProgress)

window.axios = Axios

Vue.config.productionTip = false

Vue.filter('two_digits', function (value) {
  if (value.toString().length <= 1) {
    return '0' + value.toString()
  }
  return value.toString()
})

/* eslint-disable no-new */
new Vue({
  store     : store,
  el        : '#app',
  router,
  components: {App},
  template  : '<App/>'
})


