# HeyUI-Admin

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

[简体中文](./README_zh.md) | English


## Introduction

heyui-admin is a mature enterprise application solution. It based on vue and use the UI Toolkit heyui.

- [Online Preview](http://admin.heyui.top)

- [Documentation](https://heyui.github.io/heyui-admin-site)

**This is a mature front-end solution. You can use this project to complete all front-end development work.**

## Preparation

The project is based on:
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

Understanding and learning this knowledge in advance will greatly help the use of this project.


## Features

```
- Js
  - common
    - package axios
    - all requests
    - common utils
  - js modal
  - config
    - router config
    - heyui config
    - dict config
    - menu config
  - vue
    - components
    - filters
    - directives
  - vuex
    - store

- FrameComponent
  - App
  - App Header
    - Messages
    - Global Search
  - App Menu
  - Login

- Components
  - Dashbord
  - Icons
  - Detail
    - Basic Page
    - Detail Page
  - Form
    - Basic Form
    - Create Form
  - Table
    - Basic Table
    - Search Table
    - Detail Modal
  - Components
    - AddressPicker
    - Clipboard
    - Markdown
    - Rich Text Editor
    - Chart
  - Personal Center
    - Basic Info
    - Security Setting
    - Account Binding
  - Logout

- Error Page
  - 401
  - 404
```

## Getting started

**Recommend to use of scaffolding [hey-cli](https://github.com/heyui/hey-cli).**

```bash
# clone the project
git clone https://github.com/heyui/heyui-admin.git

# install dependency
npm install

# develop, you have installed hey-cli
hey dev
```

This will automatically open http://localhost:9012, or you can change the port in hey.conf.js file.

## Develop

**hey.conf.js**，modify the reverse proxy address to the back end address of the real project.

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

## Build
We recommend that all environments use the same set of code, and refer to the documentation for specific solutions.
```
# build
hey build
```
## Browser Support

Modern browsers and Internet Explorer 9+.

**The system has been configured to install polyfill.**

## License

[MIT](https://github.com/heyui/heyui-admin/blob/master/LICENSE)

Copyright (c) 2018-present Lan (vvpvvp)