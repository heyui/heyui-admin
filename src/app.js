import 'babel-polyfill';
import Vue from 'vue';
import App from 'components/App.vue';

import heyuiConfig from 'js/config/heyui-config';
import routerConfig from 'js/config/router-config';
import 'js/vue/components';

require('./css/app.less');

// 开发环境判断
// process.env.NODE_ENV == 'development'

// 使用mock文件， 自己开发的时候请删除
require('./mock')

// HeyUI已经设定为全局变量，无需引用
// 设定全局变量请参考根目录下的hey.conf.js文件

heyuiConfig();
Vue.use(HeyUI);

const router = routerConfig(); 

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
});

export default app;
