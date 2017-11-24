import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    theme: 'black'
  },
  mutations: {
    'route/ROUTE_CHANGED' (state, transition) {
      state.theme = transition.to.meta.theme || 'black'
    }
  },
  getters: {
    theme(state) {
      return state.theme
    }
  }
})

export default store