import Vue from 'vue/dist/vue.esm.js';
// import Qiniu from 'components/common/qiniu';
// Vue.component('Qiniu', Qiniu);

Vue.component('ECharts', _ => (
  import('js/vue/vue-chart-loader').then((echarts) => {
    echarts.registerTheme('walden', EchartsThemeWalden);
    return echarts;
  }).catch(__ => 'Error occured when loading vue-echarts')
));