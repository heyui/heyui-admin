const menus = [
  {
    title: 'Dashboard',
    key: 'Home',
    icon: 'icon-monitor',
    count: 1
  },
  {
    title: 'Icons',
    key: 'Icons',
    icon: 'icon-heart'
  },
  {
    title: '列表应用',
    key: 'tablelist',
    icon: 'icon-grid-2',
    children: [
      {
        title: '基础表格',
        key: 'TableBasic'
      },
      {
        title: '查询列表',
        key: 'TableSearch'
      }
    ]
  },
  {
    title: '表单应用',
    key: 'form-folder',
    icon: 'icon-paper',
    children: [
      {
        title: '基础表单',
        key: 'Form'
      },
      {
        title: '表单详情',
        key: 'FormDetail'
      }
    ]
  },
  {
    title: '模糊匹配',
    key: 'AutoComplete-folder',
    icon: 'icon-disc',
    children: [
      {
        title: '模糊搜索',
        key: 'Autocomplete1'
      },
      {
        title: '场景应用',
        key: 'Autocomplete2'
      },
      {
        title: '复杂场景',
        key: 'Autocomplete3'
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
        key: 'Chart'
      },
      {
        title: '富文本编辑器',
        key: 'RicktextEditor'
      },
      {
        title: '代码编辑器',
        key: 'CodeEditor'
      },
      {
        title: 'Markdown编辑器',
        key: 'MarkdownEditor'
      }, {
        title: '百度地图',
        key: 'BaiduMap'
      }
    ]
  },
  {
    title: '系统设置',
    key: 'SysSetting',
    icon: 'icon-cog',
    children: [
      {
        title: '个人中心',
        key: 'AccountBasic'
      },
      {
        title: '安全设置',
        key: 'SecuritySetting'
      },
      {
        title: '权限设置',
        key: 'Authorization'
      },
      {
        title: '用户管理',
        key: 'Users'
      }
    ]
  },
  {
    title: '异常页面',
    key: 'ErrorPages',
    icon: 'icon-circle-cross',
    children: [
      {
        title: '403',
        key: 'PermissionError'
      },
      {
        title: '404',
        key: 'NotfoundError'
      },
      {
        title: '500',
        key: 'SystemError'
      }
    ]
  }
];

const getMenus = function (menuIdList = []) {
  return getAccountMenu(menus, menuIdList);
};

let getAccountMenu = (fullmenus, menuIdList) => {
  let configMenu = [];
  for (let menu of fullmenus) {
    let m = Utils.copy(menu);
    if (menuIdList.indexOf(m.key) > -1) {
      configMenu.push(m);
    } else if (menu.children && menu.children.length) {
      m.children = getAccountMenu(menu.children, menuIdList);
    }
  }
  return configMenu;
};

export { getMenus, menus };
