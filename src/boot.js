import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import Promise from 'promise-polyfill'
import 'svgxuse'

require('es6-promise').polyfill()
require('isomorphic-fetch')

if (!window.Promise) { 
  window.Promise = Promise; 
}

Vue.use(Router)
Vue.use(Vuex)

Vue.config.productionTip = false
