import Vue from 'vue'
import Vuex from 'vuex'
import AsyncComputed from 'vue-async-computed'

import App from './App'
import store from './store'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(AsyncComputed)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
})
