import Vue from 'vue';
import App from './components/Login.vue';

require('./css/login.less');
Vue.use(HeyUI);

const app = new Vue({
  el: '#app',
  render: h => h(App)
});

export default app;
