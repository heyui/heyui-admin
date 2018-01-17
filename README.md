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

### 1、按需修改配置  
/hey.js，修改反向代理地址  

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

### 2、文件结构说明

<img src="https://i.jihui.io/o_1c41c6if849hqrfb0h1sjn90db.png" alt="目录结构" style="width: 400px;max-width:100%;">

## 部署

```
hey build
```

## Dependencies

- [vue](https://cn.vuejs.org/v2/guide/)
- [vue-router](https://router.vuejs.org/)
- [hey-global](https://www.npmjs.com/package/hey-global): 控制全局变量
- [hey-log](https://www.npmjs.com/package/hey-log): 简写console.log -> log
- [hey-utils](https://www.npmjs.com/package/hey-utils): 基础utils库
- [js-model](https://www.npmjs.com/package/js-model): 前端数据模型工具
- [manba](https://www.npmjs.com/package/manba): 简洁的js日期工具:
