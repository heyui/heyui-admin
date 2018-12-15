import Vue from 'vue';
// import Qiniu from 'components/common/qiniu';

// Vue.component('Qiniu', Qiniu);
Vue.component('Chart', (resolve) => require(['components/common/chart'], resolve));
Vue.component('RichTextEditor', (resolve) => require(['components/common/RichTextEditor'], resolve));