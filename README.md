<h1 align="center"> HeyUI-Admin </h1>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/github/package-json/dependency-version/heyui/heyui-admin/vue.svg" alt="vue">
  </a>
  <a href="https://github.com/heyui/heyui">
    <img src="https://img.shields.io/github/package-json/dependency-version/heyui/heyui-admin/heyui.svg" alt="heyui">
  </a>
  <a href="https://github.com/heyui/heyui-admin/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="license">
  </a>
</p>

<div align="center">

![image](https://user-images.githubusercontent.com/8186664/51449312-6cc17c00-1d66-11e9-9ec2-33e0ed703af9.png)

</div>

## 介绍

heyui-admin 2.0 是一个成熟的企业应用解决方案，基于 vue3.0 和 heyui2.0 组件库的中后端系统。

这是一个成熟的前端开发解决方案，你可以使用这个架构完成几乎 90%的前端开发工作。

heyui admin 1.0 版本的代码请参考：[heyui admin 1.0版本](https://github.com/heyui/heyui-admin/tree/v1)

heyui 2.0 文档请参考：[heyui 2.0 版本](https://v2.heyui.top)

## 在线示例

我们启动了线上的项目，方便用户查看 heyui-admin 的实际使用效果。

[在线预览](https://admin.heyui.top)

## 教学文档

我们为 heyui-admin 提供了相关的教程说明，如果你在使用的过程中有疑问，建议先查阅相关文档。

[教学文档](http://docs.v2.heyui.top)

## 准备

项目基于以下依赖:

- [heyui](https://v2.heyui.top/)
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
  - common / 通用
    - ajax / 封装axios
    - request / 封装所有的请求
    - utils / 通用方法
  - model / Js模型
  - config / 配置
    - router-config / 路由配置
    - heyui-config / heyui配置
    - dict-config / 字典配置
    - autocomplete-config / autocomplete配置
    - category-config / category配置
    - tree-config / 树配置
    - menu-config / 系统菜单配置
  - vue
    - components / 通用组件
    - filters / 通用filters
    - directives / 通用directives
  - vuex
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

### 使用 vue-cli

需要全局安装 vue-cli@4.0.0+

```bash
# clone the project
git clone https://github.com/heyui/heyui-admin.git

cd heyui-admin

# install dependency
npm install

# develop
npm run dev
```


## 构建

```bash
# build
npm run  build
```

## 浏览器支持

现代浏览器.

**系统已经自动安装配置好 polyfill.**

## 打赏

如果你觉得这个项目帮助到了你，你可以帮作者买一杯茶🍵表示鼓励。

![image](https://heyui.github.io/heyui-admin-docs/images/docs/tea.jpg)


## License

[MIT](https://github.com/heyui/heyui-admin/blob/master/LICENSE)

Copyright (c) 2018-present Lan (vvpvvp)
