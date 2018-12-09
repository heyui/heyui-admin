const Mock = require("mockjs")

Mock.setup({
    timeout: 0-300
})

Mock.mock('/api/account/info', "get", {"status":200,"body":{"name":"moni"}});

Mock.mock('/api/dict', "get", {"status":200,"body":[{"name":"simple","data":{"1":"苹果","2":"梨子","3":"香蕉","4":"橙子","5":"樱桃"}}]});

Mock.mock('/api/login', "post", {"status":200, "body": {"value": "test"}});

Mock.mock('/api/logout', "post", {"status":200});