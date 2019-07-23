export default [{
  path: '/form',
  name: 'Form',
  component: (resolve) => require(['components/demo-components/form'], resolve),
  meta: { title: '表单', icon: 'icon-paper' }
}, {
  path: '/form-detail',
  name: 'FormDetail',
  component: (resolve) => require(['components/demo-components/form-detail'], resolve),
  meta: { title: '表单详情' }
}, {
  path: '/autocomplete1',
  name: 'Autocomplete1',
  component: (resolve) => require(['components/demo-components/autocomplete1'], resolve),
  meta: { title: '自动补全' }
}, {
  path: '/autocomplete2',
  name: 'Autocomplete2',
  component: (resolve) => require(['components/demo-components/autocomplete2'], resolve),
  meta: { title: '自动补全2' }
}, {
  path: '/autocomplete3',
  name: 'Autocomplete3',
  component: (resolve) => require(['components/demo-components/autocomplete3'], resolve),
  meta: { title: '自动补全3' }
}, {
  path: '/icons',
  name: 'Icons',
  component: (resolve) => require(['components/demo-components/icons'], resolve),
  meta: { title: '图表列表', icon: 'icon-grid' }
}, {
  path: '/form-basic',
  name: 'FormBasic',
  component: (resolve) => require(['components/demo-components/form/basic'], resolve),
  meta: { title: '基础表单', icon: 'icon-paper' }
}, {
  path: '/form-create',
  name: 'FormCreate',
  component: (resolve) => require(['components/demo-components/form/create'], resolve),
  meta: { title: '创建表单' }
}, {
  path: '/table-basic',
  name: 'TableBasic',
  component: (resolve) => require(['components/demo-components/table/basic'], resolve),
  meta: { title: '基础表格' }
}, {
  path: '/table-search',
  name: 'TableSearch',
  component: (resolve) => require(['components/demo-components/table/search'], resolve),
  meta: { title: '查询表格' }
}, {
  path: '/table-detail',
  name: 'TableDetail',
  component: (resolve) => require(['components/demo-components/table/detail'], resolve),
  meta: { title: '表格详情' }
}, {
  path: '/account-basic',
  name: 'AccountBasic',
  component: (resolve) => require(['components/demo-components/account/account'], resolve),
  meta: { title: '个人中心', icon: 'icon-head' }
}, {
  path: '/account-setting/',
  name: 'AccountSetting',
  component: (resolve) => require(['components/demo-components/account/account-setting'], resolve),
  children: [{
    path: 'security-setting',
    name: 'SecuritySetting',
    component: (resolve) => require(['components/demo-components/account/modules/security-setting'], resolve),
    meta: { title: '安全设置' }
  }, {
    path: 'notice-setting',
    name: 'NoticeSetting',
    component: (resolve) => require(['components/demo-components/account/modules/notice-setting'], resolve),
    meta: { title: '通知设置' }
  }],
  meta: { title: '个人设置' }
}, {
  path: '/info-basic',
  name: 'InfoBasic',
  component: (resolve) => require(['components/demo-components/info/basic'], resolve),
  meta: { title: '基础信息' }
}, {
  path: '/info-detail',
  name: 'InfoDetail',
  component: (resolve) => require(['components/demo-components/info/detail'], resolve),
  meta: { title: '信息详情' }
}, {
  path: '/address-picker',
  name: 'AddressPicker',
  component: (resolve) => require(['components/demo-components/components/address-picker'], resolve),
  meta: { title: '地址选择器' }
}, {
  path: '/chart',
  name: 'Chart',
  component: (resolve) => require(['components/demo-components/components/chart'], resolve),
  meta: { title: '图表' }
}, {
  path: '/code-editor',
  name: 'CodeEditor',
  component: (resolve) => require(['components/demo-components/components/code-editor'], resolve),
  meta: { title: '代码编辑器' }
}, {
  path: '/markdown-editor',
  name: 'MarkdownEditor',
  component: (resolve) => require(['components/demo-components/components/markdown-editor'], resolve),
  meta: { title: 'markdown编辑器' }
}, {
  path: '/ricktext-editor',
  name: 'RicktextEditor',
  component: (resolve) => require(['components/demo-components/components/richtext-editor'], resolve),
  meta: { title: '富文本编辑器' }
}, {
  path: '/baidu-map',
  name: 'BaiduMap',
  component: (resolve) => require(['components/demo-components/components/baidu-map'], resolve),
  meta: { title: '百度地图' }
}];
