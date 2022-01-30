import G from 'hey-global';
import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {},
    msgCount: {
      messages: 2
    },
    siderCollapsed: false
  },
  mutations: {
    updateAccount(state, data) {
      state.user = data;
    },
    updateSiderCollapse(state, isShow) {
      setTimeout(() => {
        G.trigger('page_resize');
      }, 600);
      state.siderCollapsed = isShow;
    },
    updateMsgCount(state, data) {
      state.msgCount = data;
    }
  },
  actions: {
    updateAccount(context, data) {
      context.commit('updateAccount', data);
    },
    updateSiderCollapse(context, data) {
      context.commit('updateSiderCollapse', data);
    },
    updateMsgCount(context, data) {
      context.commit('updateMsgCount', data);
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
