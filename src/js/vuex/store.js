import Vue from 'vue/dist/vue.esm.js';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    User: {},
    showMenu: true
  },
  mutations: {
    updateAccount(state, data){
      state.User = data;
    },
    updateMenu(state, isShow){
      state.showMenu = isShow;
    }
  },
  actions: {
    updateAccount(context, data){
      context.commit('updateAccount', data)
    },
    updateMenu(context, data){
      context.commit('updateMenu', data)
    }
  },
  getters: {
    account: state => {
      return state.User
    },
    showMenu: state => {
      return state.showMenu
    }
  }
})