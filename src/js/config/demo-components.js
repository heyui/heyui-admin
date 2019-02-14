export default [{
  path: '/form',
  name: 'form',
  component: (resolve) => require(['components/demo-components/form'], resolve),
  meta: {title: '表单', icon: 'icon-paper'}
}, {
  path: '/formDetail',
  name: 'formDetail',
  component: (resolve) => require(['components/demo-components/formDetail'], resolve),
  meta: {title: '表单详情'}
}, {
  path: '/autocomplete1',
  name: 'autocomplete1',
  component: (resolve) => require(['components/demo-components/autocomplete1'], resolve),
  meta: {title: '自动补全'}
}, {
  path: '/autocomplete2',
  name: 'autocomplete2',
  component: (resolve) => require(['components/demo-components/autocomplete2'], resolve),
  meta: {title: '自动补全2'}
}, {
  path: '/autocomplete3',
  name: 'autocomplete3',
  component: (resolve) => require(['components/demo-components/autocomplete3'], resolve),
  meta: {title: '自动补全3'}
}, {
  path: '/icons',
  name: 'icons',
  component: (resolve) => require(['components/demo-components/icons'], resolve),
  meta: {title: '图表列表', icon: 'icon-grid'}
}, {
  path: '/formbasic',
  name: 'formBasic',
  component: (resolve) => require(['components/demo-components/form/basic'], resolve),
  meta: {title: '基础表单', icon: 'icon-paper'}
}, {
  path: '/formcreate',
  name: 'formCreate',
  component: (resolve) => require(['components/demo-components/form/create'], resolve),
  meta: {title: '创建表单'}
}, {
  path: '/tablebasic',
  name: 'tableBasic',
  component: (resolve) => require(['components/demo-components/table/basic'], resolve),
  meta: {title: '基础表格'}
}, {
  path: '/tablesearch',
  name: 'tableSearch',
  component: (resolve) => require(['components/demo-components/table/search'], resolve),
  meta: {title: '查询表格'}
}, {
  path: '/tabledetail',
  name: 'tableDetail',
  component: (resolve) => require(['components/demo-components/table/detail'], resolve),
  meta: {title: '表格详情'}
}, {
  path: '/accountbasic',
  name: 'accountBasic',
  component: (resolve) => require(['components/demo-components/account/account'], resolve),
  meta: {title: '个人中心', icon: 'icon-head'}
}, {
  path: '/accountsetting/',
  name: 'accountSetting',
  component: (resolve) => require(['components/demo-components/account/account-setting'], resolve),
  children: [{
    path: 'security',
    name: 'securitySetting',
    component: (resolve) => require(['components/demo-components/account/modules/security-setting'], resolve),
    meta: {title: '安全设置'}
  },{
    path: 'notice',
    name: 'noticeSetting',
    component: (resolve) => require(['components/demo-components/account/modules/notice-setting'], resolve),
    meta: {title: '通知设置'}
  }],
  meta: {title: '个人设置'}
}, {
  path: '/infobasic',
  name: 'infoBasic',
  component: (resolve) => require(['components/demo-components/info/basic'], resolve),
  meta: {title: '基础信息'}
}, {
  path: '/infodetail',
  name: 'infoDetail',
  component: (resolve) => require(['components/demo-components/info/detail'], resolve),
  meta: {title: '信息详情'}
}, {
  path: '/addresspicker',
  name: 'addressPicker',
  component: (resolve) => require(['components/demo-components/components/address-picker'], resolve),
  meta: {title: '地址选择器'}
}, {
  path: '/chart',
  name: 'chart',
  component: (resolve) => require(['components/demo-components/components/chart'], resolve),
  meta: {title: '图表'}
}, {
  path: '/codeeditor',
  name: 'codeEditor',
  component: (resolve) => require(['components/demo-components/components/code-editor'], resolve),
  meta: {title: '代码编辑器'}
}, {
  path: '/markdowneditor',
  name: 'markdownEditor',
  component: (resolve) => require(['components/demo-components/components/markdown-editor'], resolve),
  meta: {title: 'markdown编辑器'}
}, {
  path: '/ricktexteditor',
  name: 'ricktextEditor',
  component: (resolve) => require(['components/demo-components/components/richtext-editor'], resolve),
  meta: {title: '富文本编辑器'}
}];