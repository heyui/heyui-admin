import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    User: {},
    siderCollapsed: false,
  },
  mutations: {
    updateAccount(state, data) {
      state.User = data;
    },
    updateSiderCollapse(state, isShow) {
      G.trigger('page_resize');
      state.siderCollapsed = isShow;
    },
  },
  actions: {
    updateAccount(context, data) {
      context.commit('updateAccount', data)
    },
    updateSiderCollapse(context, data) {
      context.commit('updateSiderCollapse', data)
    }
  },
  getters: {
    account: state => {
      return state.User
    },
    siderCollapsed: state => {
      return state.siderCollapsed
    }
  }
})