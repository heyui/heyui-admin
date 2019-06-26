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

[简体中文](./README.md) | English

## Introduction

heyui-admin is a mature enterprise application solution. It based on vue and use the UI Toolkit heyui.

This is a mature front-end solution. You can use this project to complete all front-end development work.


## Online Preview

We launched an online project to facilitate users to see the actual use of heyui-admin.

[Online Preview](http://admin.heyui.top)

## Tutorial documentation

We have provided instructions for heyui-admin. If you have any questions in the process of using it, it is recommended to consult the relevant documents first.

- [Documentation](https://heyui.github.io/heyui-admin-docs)


## Preparation

The project is based on:

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

Understanding and learning this knowledge in advance will greatly help the use of this project.

## Features

```
- Js
  - common
    - package axios
    - all requests
    - common utils
  - js model
  - config
    - router config
    - heyui config
    - dict config
    - autocomplete config
    - category config
    - menu config
    - tree config
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
  - Dashboard
  - Icons
  - Info
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
    - Chart
    - Rich Text Editor
    - Markdown Editor
    - Code Editor
    - Clipboard
  - Account Center
    - Account Setting
    - Security Setting
  - Logout

- Error Page
  - 403
  - 404
  - 500
```

## Getting started

### Use hey-cli

Install hey-cli@1.13.0+ globally.

**Recommend to use of scaffolding [hey-cli](https://github.com/heyui/hey-cli).**

```bash
# clone the project
git clone https://github.com/heyui/heyui-admin.git

cd heyui-admin

# install dependency
npm install

# develop, you have installed hey-cli
hey dev
```

This will automatically open http://localhost:9012, or you can change the port in hey.conf.js file.

### Use vue-cli

Install vue-cli@3.0.0+ globally.

```bash
# clone the project
git clone https://github.com/heyui/heyui-admin.git

cd heyui-admin

# Copy the files in the vue-cli folder to the root directory
mv -f ./vue-cli/* ./

# install dependency
npm install

# develop, you have installed vue-cli
npm run serve
```

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


## Sponsor

If you think this project has helped you, you can buy the author a cup of tea as a sign of encouragement.

![image](https://heyui.github.io/heyui-admin-docs/images/docs/tea.jpg)


## License

[MIT](https://github.com/heyui/heyui-admin/blob/master/LICENSE)

Copyright (c) 2018-present Lan (vvpvvp)
