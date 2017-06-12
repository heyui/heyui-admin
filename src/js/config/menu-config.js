const menuConfig = [
  {
    title: '首页',
    key: 'home',
    icon: 'h-icon-home'
  },
  {
    title: '坐席管理',
    key: 'seatList',
    icon: 'h-icon-setting'
  },
  {
    title: '设备管理',
    key: 'equipmentList',
    icon: 'h-icon-setting'
  },
  {
    title: '报表查询',
    icon: 'h-icon-search',
    children: [
      {
        title: '通话查询',
        key: 'ctiSearch'
      },
      {
        title: '系统报表',
        key: 'report'
      }
    ]
  },
  {
    title: '系统参数',
    key: 'system',
    icon: 'h-icon-setting'
  }
];

export default menuConfig;
