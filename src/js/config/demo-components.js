export default [
  {
    path: '/form',
    name: 'Form',
    component: () => import('@components/demo-components/form'),
    meta: { title: '表单', icon: 'icon-paper' }
  },
  {
    path: '/form-detail',
    name: 'FormDetail',
    component: () => import('@components/demo-components/form-detail'),
    meta: { title: '表单详情' }
  },
  {
    path: '/autocomplete1',
    name: 'Autocomplete1',
    component: () => import('@components/demo-components/autocomplete1'),
    meta: { title: '自动补全' }
  },
  {
    path: '/autocomplete2',
    name: 'Autocomplete2',
    component: () => import('@components/demo-components/autocomplete2'),
    meta: { title: '自动补全2' }
  },
  {
    path: '/autocomplete3',
    name: 'Autocomplete3',
    component: () => import('@components/demo-components/autocomplete3'),
    meta: { title: '自动补全3' }
  },
  {
    path: '/icons',
    name: 'Icons',
    component: () => import('@components/demo-components/icons'),
    meta: { title: '图表列表', icon: 'icon-grid' }
  },
  {
    path: '/form-basic',
    name: 'FormBasic',
    component: () => import('@components/demo-components/form/basic'),
    meta: { title: '基础表单', icon: 'icon-paper' }
  },
  {
    path: '/form-create',
    name: 'FormCreate',
    component: () => import('@components/demo-components/form/create'),
    meta: { title: '创建表单' }
  },
  {
    path: '/table-basic',
    name: 'TableBasic',
    component: () => import('@components/demo-components/table/basic'),
    meta: { title: '基础表格' }
  },
  {
    path: '/table-search',
    name: 'TableSearch',
    component: () => import('@components/demo-components/table/search'),
    meta: { title: '查询表格' }
  },
  {
    path: '/table-detail',
    name: 'TableDetail',
    component: () => import('@components/demo-components/table/detail'),
    meta: { title: '表格详情' }
  },
  {
    path: '/account-basic',
    name: 'AccountBasic',
    component: () => import('@components/demo-components/account/account'),
    meta: { title: '个人中心', icon: 'icon-head' }
  },
  {
    path: '/account-setting/',
    name: 'AccountSetting',
    component: () => import('@components/demo-components/account/account-setting'),
    children: [
      {
        path: 'security-setting',
        name: 'SecuritySetting',
        component: () => import('@components/demo-components/account/modules/security-setting'),
        meta: { title: '安全设置' }
      },
      {
        path: 'notice-setting',
        name: 'NoticeSetting',
        component: () => import('@components/demo-components/account/modules/notice-setting'),
        meta: { title: '通知设置' }
      }
    ],
    meta: { title: '个人设置' }
  },
  {
    path: '/info-basic',
    name: 'InfoBasic',
    component: () => import('@components/demo-components/info/basic'),
    meta: { title: '基础信息' }
  },
  {
    path: '/info-detail',
    name: 'InfoDetail',
    component: () => import('@components/demo-components/info/detail'),
    meta: { title: '信息详情' }
  },
  {
    path: '/address-picker',
    name: 'AddressPicker',
    component: () => import('@components/demo-components/components/address-picker'),
    meta: { title: '地址选择器' }
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('@components/demo-components/components/chart'),
    meta: { title: '图表' }
  },
  {
    path: '/code-editor',
    name: 'CodeEditor',
    component: () => import('@components/demo-components/components/code-editor'),
    meta: { title: '代码编辑器' }
  },
  {
    path: '/markdown-editor',
    name: 'MarkdownEditor',
    component: () => import('@components/demo-components/components/markdown-editor'),
    meta: { title: 'markdown编辑器' }
  },
  {
    path: '/ricktext-editor',
    name: 'RicktextEditor',
    component: () => import('@components/demo-components/components/richtext-editor'),
    meta: { title: '富文本编辑器' }
  },
  {
    path: '/baidu-map',
    name: 'BaiduMap',
    component: () => import('@components/demo-components/components/baidu-map'),
    meta: { title: '百度地图' }
  }
];
