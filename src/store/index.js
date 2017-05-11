import Vue from 'vue'
import Vuex from 'vuex'
import { appState, mutations } from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  state: appState,
})
