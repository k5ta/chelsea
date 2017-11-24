import './boot'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'
import App from './App'

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
