const staticDict = function () {
  return {
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
    },
    select: [{ title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }],
    simple: { 1: '苹果', 2: '梨子', 3: '香蕉', 4: '橙子', 5: '樱桃' }
  };
}

export default staticDict;
