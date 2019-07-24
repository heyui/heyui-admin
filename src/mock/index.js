import users from './users';
const Mock = require('mockjs');

Mock.setup({
  timeout: 0 - 300
});

Mock.mock('/api/account/info', 'get', {
  'status': 200,
  'body': {
    name: 'vvpvvp',
    desc: '执着于理想，纯粹于当下',
    email: 'HeyUI@some.com',
    org: '某某公司',
    dept: '某某部门',
    title: '前端开发工程师',
    location: '上海市',
    tags: ['善解人意', '开朗乐观', '真诚热情', '心地善良', '谦恭有礼', '彬彬有礼', '虚怀若谷', '严于律己', '雍容大度', '热情洋溢', '从容自若', '诚挚', '温厚', '谦让', '勤恳', '耿直']
  }
});

Mock.mock('/api/dict', 'get', {
  'status': 200,
  'body': [{
    'name': 'simple',
    'data': {
      '1': '苹果',
      '2': '梨子',
      '3': '香蕉',
      '4': '橙子',
      '5': '樱桃'
    }
  }]
});

Mock.mock('/api/login', 'post', {
  'status': 200,
  'body': {
    'value': 'test'
  }
});

Mock.mock('/api/logout', 'post', {
  'status': 200
});

Mock.mock('/api/home/messages', 'get', {
  'status': 200,
  'body': [{
    'id': 1,
    'isReaded': false,
    'title': '任务名称1',
    'description': '你需要在某年某月完成某某任务'
  }, {
    'id': 2,
    'isReaded': false,
    'title': '任务名称2',
    'description': '你需要在某年某月完成某某任务'
  }, {
    'id': 3,
    'isReaded': true,
    'title': '任务名称3',
    'description': '你需要在某年某月完成某某任务'
  }, {
    'id': 4,
    'isReaded': true,
    'title': '任务名称4',
    'description': '你需要在某年某月完成某某任务'
  }, {
    'id': 5,
    'isReaded': true,
    'title': '任务名称5',
    'description': '你需要在某年某月完成某某任务'
  }]
});

Mock.mock('/api/management/users', 'get', { status: 200, body: users });

Mock.mock('/api/management/roles', 'get', {
  'status': 200,
  'body': [{
    id: 1,
    name: '系统管理员',
    description: '最高权限，可操作任何页面和功能'
  }, {
    id: 2,
    name: '普通员工',
    description: '普通员工'
  }, {
    id: 3,
    name: 'Leader',
    description: '可进行团队数据查看，可导出数据'
  }]
});
