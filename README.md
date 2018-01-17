# HeyUI-Admin
企业应用架构

本项目是利用heyui搭建的基础企业应用架构，里面集成了一系列的项目处理方案。
我们可以直接通过本项目改造成你想要系统。

## 在线示例

在线示例：[http://admin.heyui.top](http://admin.heyui.top)

## Install

### 下载
```
git clone https://github.com/heyui/heyui-admin.git project-name
```

### 启动
建议使用脚手架[hey-cli](https://github.com/heyui/hey-cli)开发项目。

```
npm install

hey dev
```

项目即启动成功，访问[http://localhost:9012](http://localhost:9012)查看系统


## 开发

### 按需修改配置  
**1、/hey.js，**  
修改后端地址

```js
devServer: {
  "proxy": {
    "/api": {
      //反向代理的地址
      "target": "http://umock.ch-un.com"
    }
  },
  historyApiFallback: true
},
```

**2、/js/config/router-config.js**  
修改router的配置，当然在config文件夹中的所有配置都可以按照自己的需求修改。


### 文件结构说明

![目录结构](https://i.jihui.io/o_1c41c6if849hqrfb0h1sjn90db.png)

## 部署

```
hey build
```

## Dependencies

- vue
- vue-router
- 控制全局变量: [hey-global](https://www.npmjs.com/package/hey-global)
- 简写console.log -> log: [hey-log](https://www.npmjs.com/package/hey-log)
- 基础utils库: [hey-utils](https://www.npmjs.com/package/hey-utils)
- 前端数据模型工具：[js-model](https://www.npmjs.com/package/js-model)
- 简洁的js日期处理: [manba](https://www.npmjs.com/package/manba)
