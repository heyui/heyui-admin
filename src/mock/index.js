const Mock = require("mockjs")

Mock.setup({
  timeout: 0 - 300
})

Mock.mock('/api/account/info', "get", {
  "status": 200,
  "body": {
    "name": "moni"
  }
});

Mock.mock('/api/dict', "get", {
  "status": 200,
  "body": [{
    "name": "simple",
    "data": {
      "1": "苹果",
      "2": "梨子",
      "3": "香蕉",
      "4": "橙子",
      "5": "樱桃"
    }
  }]
});

Mock.mock('/api/login', "post", {
  "status": 200,
  "body": {
    "value": "test"
  }
});

Mock.mock('/api/logout', "post", {
  "status": 200
});

Mock.mock('/home/messages', "get", {
  "status": 200,
  "body": [{
    "id": 1,
    "title": "任务名称1",
    "title": "你需要在某年某月完成某某任务",
  },{
    "id": 2,
    "title": "任务名称2",
    "title": "你需要在某年某月完成某某任务",
  },{
    "id": 3,
    "title": "任务名称3",
    "title": "你需要在某年某月完成某某任务",
  },{
    "id": 4,
    "title": "任务名称4",
    "title": "你需要在某年某月完成某某任务",
  },{
    "id": 5,
    "title": "任务名称5",
    "title": "你需要在某年某月完成某某任务",
  }]
});