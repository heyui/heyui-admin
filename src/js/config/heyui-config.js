const heyuiConfig = () => {
  HeyUI.initDict({
    presenceStatus: {
      0: '离线',
      1: '就绪',
      2: '忙碌',
      3: '离席',
      4: '通话中',
      5: '通话中'
    },
    role: {
      1: '普通坐席',
      2: '坐席管理员'
    },
    phoneStatus: {
      0: '空闲',
      1: '占线',
      2: '振铃',
      3: '媒体音',
      4: '通话中'
    },
    phoneType: {
      1: '模拟话机',
      2: 'IP话机',
      3: '软电话'
    }
  });

  // HeyUI.config("autocomplete.configs", {
  //   simple: {
  //     loadData,
  //     keyName: 'id',
  //     titleName: 'name',
  //     minWord: 1
  //   }
  // });

  // HeyUI.config("tree.configs", {
  //   simple: {
  //     keyName: 'id',
  //     parentName: 'parent',
  //     titleName: 'title',
  //     dataMode: 'list',
  //     datas: list
  //   }
  // });
};

export default heyuiConfig;
