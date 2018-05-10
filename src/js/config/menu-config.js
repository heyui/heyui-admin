const menuConfig = [
  {
    title: '首页',
    key: 'home'
  },
  {
    title: '表单',
    key: 'form-folder',
    children: [
      {
        title: '表单',
        icon: 'h-icon-search',
        key: 'form'
      }
    ]
  },
  {
    title: 'AutoComplete',
    key: 'AutoComplete-folder',
    children: [
      {
        title: '百度搜索',
        icon: 'h-icon-search',
        key: 'autocomplete1'
      },
      {
        title: '场景应用',
        icon: 'h-icon-complete',
        key: 'autocomplete2'
      },
      {
        title: '复杂场景',
        icon: 'h-icon-user',
        key: 'autocomplete3'
      }
    ]
  }
];

export default menuConfig;
