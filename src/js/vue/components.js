import SubMenu from '@components/common/sub-menu';
import SearchFilter from '@components/common/search-filter';
import AItem from '@components/common-item/a-item';
import BItem from '@components/common-item/b-item';
import Upload from '@components/common/upload';
import { defineAsyncComponent } from 'vue';

export default app => {
  app.component('SubMenu', SubMenu);
  app.component('AItem', AItem);
  app.component('BItem', BItem);
  app.component('SearchFilter', SearchFilter);
  app.component('Upload', Upload);
  app.component(
    'Chart',
    defineAsyncComponent(() => import('@components/common/chart'))
  );
  app.component(
    'CodeEditor',
    defineAsyncComponent(() => import('@components/common/code-editor'))
  );
  app.component(
    'RichTextEditor',
    defineAsyncComponent(() => import('@components/common/richtext-editor'))
  );
  app.component(
    'MarkdownEditor',
    defineAsyncComponent(() => import('@components/common/markdown-editor'))
  );
  app.component(
    'BaiduMap',
    defineAsyncComponent(() => import('@components/common/baidu-map'))
  );
};
