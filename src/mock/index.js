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

Mock.mock('/api/home/messages', "get", {
  "status": 200,
  "body": [{
    "id": 1,
    "isReaded": false,
    "title": "任务名称1",
    "description": "你需要在某年某月完成某某任务",
  },{
    "id": 2,
    "isReaded": false,
    "title": "任务名称2",
    "description": "你需要在某年某月完成某某任务",
  },{
    "id": 3,
    "isReaded": true,
    "title": "任务名称3",
    "description": "你需要在某年某月完成某某任务",
  },{
    "id": 4,
    "isReaded": true,
    "title": "任务名称4",
    "description": "你需要在某年某月完成某某任务",
  },{
    "id": 5,
    "isReaded": true,
    "title": "任务名称5",
    "description": "你需要在某年某月完成某某任务",
  }]
});