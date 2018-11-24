const menuConfig = [
  {
    title: 'Dashboard',
    key: 'Home',
    icon: 'icon-monitor',
    count: 1
  },
  {
    title: 'Icons',
    key: 'icons',
    icon: 'icon-heart'
  },
  {
    title: '表单',
    key: 'form-folder',
    icon: 'icon-paper',
    children: [
      {
        title: '表单',
        key: 'form'
      }
    ]
  },
  {
    title: 'AutoComplete',
    key: 'AutoComplete-folder',
    icon: 'icon-disc',
    children: [
      {
        title: '百度搜索',
        key: 'autocomplete1'
      },
      {
        title: '场景应用',
        key: 'autocomplete2'
      },
      {
        title: '复杂场景',
        key: 'autocomplete3'
      }
    ]
  },
  {
    title: '错误页面',
    key: 'error-pages',
    icon: 'icon-circle-cross',
    children: [
      {
        title: '403',
        key: 'permissionError'
      },
      {
        title: '404',
        key: 'notfoundError'
      },
      {
        title: '500',
        key: 'systemError'
      }
    ]
  }
];

export default menuConfig;
