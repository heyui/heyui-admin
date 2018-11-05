const menuConfig = [
  {
    title: '首页',
    key: 'home',
    icon: 'icon-air-play',
    count: 1
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
  }
];

export default menuConfig;
