const menuData = [];

export default function(){
  return {
    menu: {
      keyName: 'id',
      parentName: 'parent',
      titleName: 'title',
      dataMode: 'list',
      datas: menuData
    },
    staff: {
      keyName: 'id',
      parentName: 'parentId',
      titleName: 'name',
      dataMode: 'list',
      getTotalDatas: (resolve) => {
        R.Management.getTeamList(null, '').then((result) => {
          if (result.ok) {
            let teams = result.body.teams;
            resolve(teams);
          } else {
            resolve([]);
          }
        })
      }
    },

  }
};
