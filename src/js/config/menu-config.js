const menuConfig = [
  {
    title: '首页',
    key: 'home',
    icon: 'h-icon-home'
  },
  {
    title: '表单',
    icon: 'h-icon-star-on',
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
    icon: 'h-icon-star-on',
    key: 'AutoComplete-folder',
    children: [
      {
        title: '百度搜索',
        icon: 'h-icon-search',
        key: 'autocomplete1'
      }
    ]
  }
];

export default menuConfig;
