<h1 align="center"> HeyUI-Admin </h1>

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

<div align="center">

![image](https://user-images.githubusercontent.com/8186664/51449312-6cc17c00-1d66-11e9-9ec2-33e0ed703af9.png)

</div>

简体中文 | [English](./README.md)

## 介绍

heyui-admin 是一个成熟的企业应用解决方案，它基于 vue2.0 和 heyui 组件库的后台管理系统。

- [在线预览](http://admin.heyui.top)

- [文档](https://heyui.github.io/heyui-admin)

<span style="color: red">这是一个成熟的前端开发解决方案，你可以使用这个架构完成几乎 90%的前端开发工作。</span>

## 准备

项目基于一下依赖:

- [hey-ui](https://www.heyui.top/)
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
  - 通用 / common
    - 封装axios / ajax
    - 封装所有的请求 / request
    - 通用方法 / utils
  - Js模型/model
  - 配置 / config
    - 路由配置 / router-config
    - heyui配置 / router-config
    - 字典配置 / dict-config
    - 树配置 / tree-config
    - 菜单配置 / menu-config
    - 图表风格配置 / echart-config
  - vue / vue
    - 通用组件 / components
    - 通用filters / filters
    - 通用directives / directives
  - vuex / vuex
    - store

- 框架组件
  - App
  - App头部
    - 消息
    - 全局搜索
  - App左侧菜单
  - 登录

- 组件
  - 仪表盘
  - Icons
  - 信息页
    - 详情信息
  - Form
    - 基本的表单
    - 创建
  - Table
    - 基本表格
    - 搜索
    - 详情弹框
  - Components
    - 图表
    - 富文本编辑器Editor
    - 代码编辑器
    - Markdown编辑器
    - 剪贴板
  - 个人中心
    - 基本信息
    - 安全中心
  - 登出

- 错误页面
  - 403
  - 404
  - 500
```

## 开始

**我们建议使用[hey-cli](https://github.com/heyui/hey-cli)脚手架。**

```bash
# clone the project
git clone https://github.com/heyui/heyui-admin.git

cd heyui-admin

# install dependency
npm install

# develop, 你需要首先安装 hey-cli
hey dev
```

系统将自动打开页面 http://localhost:9012, 或者你可以通过 hey.conf.js 文件修改端口号.

## 开发

**hey.conf.js**，将反向代理地址修改至真正的项目后端地址.

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

**系统已经自动安装配置好 polyfill.**

## License

[MIT](https://github.com/heyui/heyui-admin/blob/master/LICENSE)

Copyright (c) 2018-present Lan (vvpvvp)
