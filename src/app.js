import { createApp } from 'vue';
import App from '@components/App';
import heyui from 'heyui';
import initHeyui from '@js/config/heyui-config';
import router from '@js/config/router-config';
import store from '@js/vuex/store';
import initComponents from '@js/vue/components';
import initFilters from '@js/vue/filters';
import initDirectives from '@js/vue/directives';
import '@js/vue/filters';

require('./css/app.less');

// 开发环境判断
// process.env.NODE_ENV == 'development'

// 使用mock文件， 自己开发的时候请删除
require('./mock/index');

const app = createApp(App);
app.use(heyui);
app.use(store);
app.use(router);
initComponents(app);
initFilters(app);
initDirectives(app);
initHeyui();

app.mount('#app');
export default app;
