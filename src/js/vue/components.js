import Vue from 'vue';
import SubMenu from 'components/common/sub-menu';
import SearchFilter from 'components/common/search-filter';
import AItem from 'components/common-item/a-item';
import BItem from 'components/common-item/b-item';

Vue.component('SubMenu', SubMenu);
Vue.component('AItem', AItem);
Vue.component('BItem', BItem);
Vue.component('SearchFilter', SearchFilter);
Vue.component('Qiniu', (resolve) => require(['components/common/qiniu'], resolve));
Vue.component('Chart', (resolve) => require(['components/common/chart'], resolve));
Vue.component('CodeEditor', (resolve) => require(['components/common/code-editor'], resolve));
Vue.component('RichTextEditor', (resolve) => require(['components/common/richtext-editor'], resolve));
Vue.component('MarkdownEditor', (resolve) => require(['components/common/markdown-editor'], resolve));
Vue.component('BaiduMap', (resolve) => require(['components/common/baidu-map'], resolve));
