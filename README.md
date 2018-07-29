<p align="center">
  <img width="320" src="http://7xpm14.com1.z0.glb.clouddn.com/logo.png">
</p>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.5.16-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/heyui/heyui">
    <img src="https://img.shields.io/badge/heyui-1.6.0-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://github.com/heyui/heyui-admin/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

简体中文 | [English](./README_en.md)


## 介绍

heyui-admin是一个成熟的企业应用解决方案，它基于vue和heyui组件库。

- [在线预览](http://admin.heyui.top)

- [文档](https://heyui.github.io/heyui-admin)

**这是一个成熟的前端开发解决方案，你可以使用这个项目完成所有的前端开发工作。**

## 准备

这个项目基于一下依赖:
- [hey-ui](https://github.com/ElemeFE/element)
- [vue](https://cn.vuejs.org/index.html)
- [vuex](https://vuex.vuejs.org/zh-cn/)
- [vue-router](https://router.vuejs.org/zh-cn/)
- [axios](https://github.com/axios/axios)
- [js-model](https://www.npmjs.com/package/js-model)
- [manba](https://www.npmjs.com/package/manba)
- [hey-utils](https://www.npmjs.com/package/hey-utils)
- [hey-global](https://www.npmjs.com/package/hey-global)
- [hey-log](https://www.npmjs.com/package/hey-log)

提前了解和学习这些知识将大大有助于这个项目的使用。


## 功能

```
- Js
  - 通用
    - 封装axios
    - 所有的请求js文件
    - 通用方法
  - js模型
  - 配置
    - 路由配置
    - heyui配置
    - 字典配置
    - 菜单配置
    - 图表风格配置
  - vue
    - 通用组件
    - filters
    - directives
  - vuex
    - store

- 框架组件
  - App
  - App头部
  - App左侧菜单

- 组件
  - 登录
  - 仪表盘
  - 创建表单
  - 表格
  - 数据列表
  - 详情页面
  - 详情弹框
  - 个人中心
  - 选择地址组件
  - 剪贴板
  - Markdown编辑器
  - 富文本编辑器Editor
  - 头部消息
  - 全局搜索
  - 图表
  - 使用七牛上传
  - 自定义上传
  - 登出

- 错误页面
  - 401
  - 404
```

## 开始

**我们建议使用[hey-cli](https://github.com/heyui/hey-cli)脚手架。**

```bash
# clone the project
git clone https://github.com/heyui/heyui-admin.git

# install dependency
npm install

# develop, 你需要首先安装 hey-cli
hey dev
```

系统将自动打开页面 http://localhost:9012, 或者你可以通过 hey.conf.js 文件修改端口号.

## 开发

**hey.js**，将反向代理地址修改至真正的项目后端地址.

```js
devServer: {
  "proxy": {
    "/api": {
      //proxy address
      "target": "http://umock.ch-un.com"
    }
  },
  historyApiFallback: true
},
```

## 构建

我们建议所有构建环境使用相同的代码，具体方案请参考开发文档。

```
# build
hey build
```

## 浏览器支持

现代浏览器以及 Internet Explorer 9+.

**系统已经自动安装配置好polyfill.**

## License

[MIT](https://github.com/heyui/heyui-admin/blob/master/LICENSE)

Copyright (c) 2018-present Lan (vvpvvp)