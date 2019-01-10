import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    User: {},
    siderCollapsed: false,
    showSystab: false,
    headerFixed: false,
    siderFixed: false,
  },
  mutations: {
    updateAccount(state, data) {
      state.User = data;
    },
    updateSiderCollapse(state, isShow) {
      G.trigger('page_resize');
      state.siderCollapsed = isShow;
    },
    updateSystab(state, isShow) {
      state.showSystab = isShow;
    },
    updateHeaderFixed(state, isShow) {
      state.headerFixed = isShow;
    },
    updateSiderFixed(state, isShow) {
      state.siderFixed = isShow;
    }
  },
  actions: {
    updateAccount(context, data) {
      context.commit('updateAccount', data)
    },
    updateSiderCollapse(context, data) {
      context.commit('updateSiderCollapse', data)
    },
    updateSystab(context, data) {
      context.commit('updateSystab', data)
    },
    updateHeaderFixed(context, data) {
      context.commit('updateHeaderFixed', data)
    },
    updateSiderFixed(context, data) {
      context.commit('updateSiderFixed', data)
    }
  },
  getters: {
    account: state => {
      return state.User
    },
    siderCollapsed: state => {
      return state.siderCollapsed
    },
    showSystab: state => {
      return state.showSystab
    },
    headerFixed: state => {
      return state.headerFixed
    },
    siderFixed: state => {
      return state.siderFixed
    }
  }
})