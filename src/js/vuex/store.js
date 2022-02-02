import { createStore } from 'vuex';
import { getMenus } from '@js/config/menu-config';

export default createStore({
  state: {
    user: {},
    msgCount: {
      messages: 2
    },
    menus: [],
    menuKeys: [],
    siderCollapsed: false,
    pageResizeCount: 0
  },
  mutations: {
    updateMenus(state, data) {
      state.menus = getMenus(data);
      state.menuKeys = data;
    },
    updateAccount(state, data) {
      state.user = data;
    },
    updateSiderCollapse(state, isShow) {
      setTimeout(() => {
        state.pageResizeCount += 1;
      }, 600);
      state.siderCollapsed = isShow;
    },
    updateMsgCount(state, data) {
      state.msgCount = data;
    }
  },
  actions: {
    updateMenuKeys({ commit }, data) {
      commit('updateMenus', data);
    },
    updateAccount({ commit }, data) {
      commit('updateAccount', data);
    },
    updateSiderCollapse({ commit }, data) {
      commit('updateSiderCollapse', data);
    },
    updateMsgCount({ commit }, data) {
      commit('updateMsgCount', data);
    }
  },
  getters: {
    account: state => {
      return state.user;
    },
    siderCollapsed: state => {
      return state.siderCollapsed;
    },
    msgCount: state => {
      return state.msgCount;
    }
  }
});
