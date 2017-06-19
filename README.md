# HeyUI-demo
企业应用架构demo

本项目是利用heyui搭建的基础企业应用架构demo，里面集成了一系列的项目处理方案。
我们可以直接通过本项目改造成你想要系统。

##在线demo

地址：[http://demo.heyui.top/](http://demo.heyui.top/)

## Install

### 下载
```
git clone https://github.com/heyui/heyui-demo.git
```

### 启动
建议使用脚手架[hey-cli](https://github.com/heyui/hey-cli)开发项目。

```
npm install

hey dev
```

项目即启动成功。  
访问[http://localhost:9010](http://localhost:9010)查看系统

## Dependencies

- vue
- vue-router
- 控制全局变量: [hey-global](https://www.npmjs.com/package/hey-global)
- 简写console.log -> log: [hey-log](https://www.npmjs.com/package/hey-log)
- 基础utils库: [hey-utils](https://www.npmjs.com/package/hey-utils)
- 前端数据模型工具：[js-model](https://www.npmjs.com/package/js-model)
- 简洁的js日期处理: [manba](https://www.npmjs.com/package/manba)