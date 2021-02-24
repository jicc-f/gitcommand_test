import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters  from'./getters'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mygoods: [],
    isOldGoods: 'aaaa'
  },
  getters:getters,

  mutations: mutations,
  actions: actions,
  modules: {}
})