import Vue from 'vue';
// import Qiniu from 'components/common/qiniu';

// Vue.component('Qiniu', Qiniu);
Vue.component('Chart', (resolve) => require(['components/common/Chart'], resolve));
Vue.component('CodeEditor', (resolve) => require(['components/common/CodeEditor'], resolve));
Vue.component('RichTextEditor', (resolve) => require(['components/common/RichTextEditor'], resolve));
Vue.component('MarkdownEditor', (resolve) => require(['components/common/MarkdownEditor'], resolve));