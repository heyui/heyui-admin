import Vue from 'vue';
import App from './components/App.vue';
import VueRouter from 'vue-router';

import heyuiConfig from './js/config/heyui-config';
import routerConfig from './js/config/router-config';

let auth = Utils.getLocal2Json("Auth");
if(!auth){
  HeyUI.$Message.error("未登录");
  window.location = '/login.html';
}
require('./css/common.less');



heyuiConfig();

Vue.use(VueRouter);
Vue.use(HeyUI);

const router = routerConfig(); 

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
});

export default app;
