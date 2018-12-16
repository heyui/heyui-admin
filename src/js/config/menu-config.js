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
    title: '扩展组件',
    key: 'Advance-folder',
    icon: 'icon-bar-graph-2',
    children: [
      {
        title: '图表',
        key: 'chart'
      },
      {
        title: '富文本编辑器',
        key: 'ricktextEditor'
      },
      {
        title: '代码编辑器',
        key: 'codeEditor'
      },
      {
        title: 'Markdown编辑器',
        key: 'markdownEditor'
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
    title: '系统设置',
    key: 'sys-setting',
    icon: 'icon-cog',
    children: [
      {
        title: '系统设置',
        key: 'setting'
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
