import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    User: {},
    collapseMenu: false,
    showSystab: Utils.getLocal('SETTING_SYSTAB') === 'true',
  },
  mutations: {
    updateAccount(state, data) {
      state.User = data;
    },
    updateMenu(state, isShow) {
      state.collapseMenu = isShow;
    },
    updateSystab(state, isShow) {
      Utils.saveLocal('SETTING_SYSTAB', isShow);
      state.showSystab = isShow;
    }
  },
  actions: {
    updateAccount(context, data) {
      context.commit('updateAccount', data)
    },
    updateMenu(context, data) {
      context.commit('updateMenu', data)
    },
    updateSystab(context, data) {
      context.commit('updateSystab', data)
    }
  },
  getters: {
    account: state => {
      return state.User
    },
    collapseMenu: state => {
      return state.collapseMenu
    },
    showSystab: state => {
      return state.showSystab
    }
  }
})