import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    User: {}
  },
  mutations: {
    updateAccount(state, data){
      state.User = data;
    }
  },
  actions: {
    updateAccount(context, data){
      context.commit('updateAccount', data)
    }
  },
  getters: {
    account: state => {
      return state.User
    }
  }
})