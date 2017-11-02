webpackJsonp([0],{

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(178)
}
var Component = __webpack_require__(25)(
  /* script */
  __webpack_require__(176),
  /* template */
  __webpack_require__(180),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui-demo/src/components/welcome/home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-506c3179", Component.options)
  } else {
    hotAPI.reload("data-v-506c3179", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
  data: function data() {
    return {};
  },

  methods: {}
};

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "padding",
      rawName: "v-padding",
      value: (20),
      expression: "20"
    }],
    staticClass: "app-home"
  }, [_c('Row', {
    attrs: {
      "space": 20
    }
  }, [_c('Col', {
    attrs: {
      "width": 12
    }
  }, [_c('div', {
    directives: [{
      name: "height",
      rawName: "v-height",
      value: (280),
      expression: "280"
    }, {
      name: "padding",
      rawName: "v-padding",
      value: (30),
      expression: "30"
    }],
    staticClass: "h-panel"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-center",
    attrs: {
      "width": 11
    }
  }, [_c('h-circle', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip"
    }],
    attrs: {
      "percent": 76,
      "stroke-width": 10,
      "size": 200,
      "ref-el": "demo1",
      "placement": "right"
    }
  }, [_c('div', {
    directives: [{
      name: "font",
      rawName: "v-font",
      value: (28),
      expression: "28"
    }],
    staticClass: "gray-color"
  }, [_vm._v("122,332,98")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "height",
      rawName: "v-height",
      value: (5),
      expression: "5"
    }]
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "font",
      rawName: "v-font",
      value: (13),
      expression: "13"
    }],
    staticClass: "dark-color"
  }, [_vm._v("目前达成比例")]), _vm._v(" "), _c('div', {
    staticClass: "gray-color"
  }, [_c('span', {
    directives: [{
      name: "font",
      rawName: "v-font",
      value: (16),
      expression: "16"
    }],
    staticClass: "primary-color"
  }, [_vm._v(_vm._s(parseInt(123 * 76 / 100)))]), _vm._v("/"), _c('span', [_vm._v("123")])])])], 1), _vm._v(" "), _c('Col', {
    staticClass: "text-center",
    attrs: {
      "width": 7
    }
  }, [_c('div', {
    directives: [{
      name: "height",
      rawName: "v-height",
      value: (100),
      expression: "100"
    }]
  }), _vm._v(" "), _c('h-circle', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip"
    }],
    attrs: {
      "percent": 26,
      "stroke-width": 10,
      "size": 100,
      "color": "red",
      "ref-el": "demo2",
      "placement": "right"
    }
  }, [_c('div', {
    directives: [{
      name: "height",
      rawName: "v-height",
      value: (5),
      expression: "5"
    }]
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "font",
      rawName: "v-font",
      value: (13),
      expression: "13"
    }],
    staticClass: "dark-color"
  }, [_vm._v("目前达成比例")]), _vm._v(" "), _c('div', {
    staticClass: "gray-color"
  }, [_c('span', {
    directives: [{
      name: "font",
      rawName: "v-font",
      value: (16),
      expression: "16"
    }],
    staticClass: "primary-color"
  }, [_vm._v(_vm._s(parseInt(123 * 26 / 100)))]), _vm._v("/"), _c('span', [_vm._v("123")])])])], 1), _vm._v(" "), _c('Col', {
    staticClass: "text-center",
    attrs: {
      "width": 6
    }
  }, [_c('div', {
    directives: [{
      name: "height",
      rawName: "v-height",
      value: (100),
      expression: "100"
    }]
  }), _vm._v(" "), _c('h-circle', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip"
    }],
    attrs: {
      "percent": 100,
      "stroke-width": 10,
      "size": 100,
      "color": "green",
      "ref-el": "demo3",
      "placement": "right"
    }
  }, [_c('div', {
    directives: [{
      name: "height",
      rawName: "v-height",
      value: (5),
      expression: "5"
    }]
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "font",
      rawName: "v-font",
      value: (13),
      expression: "13"
    }],
    staticClass: "dark-color"
  }, [_vm._v("目前达成比例")]), _vm._v(" "), _c('div', {
    staticClass: "gray-color"
  }, [_c('span', {
    directives: [{
      name: "font",
      rawName: "v-font",
      value: (16),
      expression: "16"
    }],
    staticClass: "primary-color"
  }, [_vm._v(_vm._s(parseInt(123 * 26 / 100)))]), _vm._v("/"), _c('span', [_vm._v("123")])])])], 1)], 1)], 1)]), _vm._v(" "), _c('Col', {
    attrs: {
      "width": 12
    }
  }, [_c('div', {
    directives: [{
      name: "height",
      rawName: "v-height",
      value: (280),
      expression: "280"
    }],
    staticClass: "h-panel progress-div"
  }, [_c('div', {
    staticClass: "clearfix"
  }, [_c('div', {
    staticClass: "float-right"
  }, [_c('span', {
    directives: [{
      name: "color",
      rawName: "v-color:gray",
      arg: "gray"
    }]
  }, [_vm._v("总共达成")]), _c('i', {
    staticClass: "h-split"
  }), _c('span', {
    directives: [{
      name: "font",
      rawName: "v-font",
      value: (48),
      expression: "48"
    }],
    staticStyle: {
      "font-weight": "100"
    }
  }, [_vm._v("200")]), _c('i', {
    staticClass: "h-split"
  }), _c('span', {
    directives: [{
      name: "color",
      rawName: "v-color:primary",
      arg: "primary"
    }]
  }, [_vm._v("W")])])]), _vm._v(" "), _c('p', [_c('Progress', {
    attrs: {
      "percent": 99,
      "color": "green"
    }
  }, [_c('span', {
    slot: "title"
  }, [_vm._v("推荐面试")]), _c('span', {
    slot: "text"
  }, [_vm._v("4个")])])], 1), _vm._v(" "), _c('p', [_c('Progress', {
    attrs: {
      "percent": 12,
      "color": "red"
    }
  }, [_c('span', {
    slot: "title"
  }, [_vm._v("客户面试")]), _c('span', {
    slot: "text"
  }, [_vm._v("0个")])])], 1), _vm._v(" "), _c('p', [_c('Progress', {
    attrs: {
      "percent": 12,
      "color": "red"
    }
  }, [_c('span', {
    slot: "title"
  }, [_vm._v("Offer谈判")]), _c('span', {
    slot: "text"
  }, [_vm._v("0个")])])], 1), _vm._v(" "), _c('p', [_c('Progress', {
    attrs: {
      "percent": 12,
      "color": "red"
    }
  }, [_c('span', {
    slot: "title"
  }, [_vm._v("入职试用")]), _c('span', {
    slot: "text"
  }, [_vm._v("0个")])])], 1), _vm._v(" "), _c('p', [_c('Progress', {
    attrs: {
      "percent": 12,
      "color": "red"
    }
  }, [_c('span', {
    slot: "title"
  }, [_vm._v("入职试用")]), _c('span', {
    slot: "text"
  }, [_vm._v("0个")])])], 1)])]), _vm._v(" "), _c('Col', {
    attrs: {
      "width": 24
    }
  }, [_c('div', {
    staticClass: "h-panel"
  }, [_c('div', {
    staticClass: "h-panel-bar"
  }, [_c('span', {
    staticClass: "h-panel-title"
  }, [_vm._v("搭建顺序")])]), _vm._v(" "), _c('div', {
    staticClass: "h-panel-body demo-doc"
  }, [_c('p', {
    directives: [{
      name: "font",
      rawName: "v-font",
      value: (16),
      expression: "16"
    }]
  }, [_vm._v("1、下载")]), _vm._v(" "), _c('p', [_vm._v("前往github下载，"), _c('a', {
    attrs: {
      "href": "https://github.com/heyui/heyui-demo"
    }
  }, [_vm._v("https://github.com/heyui/heyui-demo")])]), _vm._v(" "), _c('p', [_c('code', [_vm._v("git clone https://github.com/heyui/heyui-demo.git 自己项目名 ")])]), _vm._v(" "), _c('p', [_vm._v("将git地址转换为自己项目的git地址")]), _vm._v(" "), _c('p', [_c('code', [_vm._v("git remote set-url origin 自己的git地址"), _c('br'), _vm._v("git push")])]), _vm._v(" "), _c('p', {
    directives: [{
      name: "font",
      rawName: "v-font",
      value: (16),
      expression: "16"
    }]
  }, [_vm._v("2、安装hey-cli工具")]), _vm._v(" "), _c('p', [_vm._v("可以在npm下载，"), _c('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/hey-cli"
    }
  }, [_vm._v("https://www.npmjs.com/package/hey-cli")]), _vm._v("，如果您已经安装，请忽略这一步。")]), _vm._v(" "), _c('p', [_c('code', [_vm._v("npm install -g hey-cli")])]), _vm._v(" "), _c('p', {
    directives: [{
      name: "font",
      rawName: "v-font",
      value: (16),
      expression: "16"
    }]
  }, [_vm._v("3、安装依赖")]), _vm._v(" "), _c('p', [_c('code', [_vm._v("npm install")])]), _vm._v(" "), _c('p', [_vm._v("本项目有以下依赖包：")]), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
    attrs: {
      "target": "_blank",
      "href": "https://www.npmjs.com/package/axios"
    }
  }, [_vm._v("axios")]), _vm._v(": 异步数据加载")]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "target": "_blank",
      "href": "https://www.npmjs.com/package/hey-global"
    }
  }, [_vm._v("hey-global")]), _vm._v(": 全局变量控制")]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "target": "_blank",
      "href": "https://www.npmjs.com/package/hey-log"
    }
  }, [_vm._v("hey-log")]), _vm._v(": console.log简写工具")]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "target": "_blank",
      "href": "https://www.npmjs.com/package/hey-utils"
    }
  }, [_vm._v("hey-utils")]), _vm._v(": 通用utils")]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "target": "_blank",
      "href": "https://www.npmjs.com/package/heyui"
    }
  }, [_vm._v("heyui")]), _vm._v(": HeyUI库")]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "target": "_blank",
      "href": "https://www.npmjs.com/package/js-model"
    }
  }, [_vm._v("js-model")]), _vm._v(": 前端数据模型工具")]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "target": "_blank",
      "href": "https://www.npmjs.com/package/manba"
    }
  }, [_vm._v("manba")]), _vm._v(": 日期工具库")]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "target": "_blank",
      "href": "https://www.npmjs.com/package/qs"
    }
  }, [_vm._v("qs")]), _vm._v(": 数据处理工具")]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "target": "_blank",
      "href": "https://www.npmjs.com/package/vue"
    }
  }, [_vm._v("vue")]), _vm._v(": Vue")]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "target": "_blank",
      "href": "https://www.npmjs.com/package/vue-router"
    }
  }, [_vm._v("vue-router")]), _vm._v(": vue-router")])]), _vm._v(" "), _c('p', {
    directives: [{
      name: "font",
      rawName: "v-font",
      value: (16),
      expression: "16"
    }]
  }, [_vm._v("4、修改相关项")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("修改hey.js文件中的端口号，以及proxy反向代理地址。")]), _vm._v(" "), _c('li', [_vm._v("修改app-header文件中的项目名，以及删除github链接。")]), _vm._v(" "), _c('li', [_vm._v("修改menu-config.js文件中的目录配置")]), _vm._v(" "), _c('li', [_vm._v("修改router-config.js文件中的router配置")]), _vm._v(" "), _c('li', [_vm._v("修改src/images/logo.ico文件")])]), _vm._v(" "), _c('p', {
    directives: [{
      name: "font",
      rawName: "v-font",
      value: (16),
      expression: "16"
    }]
  }, [_vm._v("2、启动项目")]), _vm._v(" "), _c('p', [_vm._v("项目的配置在文件hey.js中，具体请参考代码与hey-cli配置规则。")]), _vm._v(" "), _c('p', [_c('code', [_vm._v("hey dev")])]), _vm._v(" "), _c('p', {
    directives: [{
      name: "font",
      rawName: "v-font",
      value: (16),
      expression: "16"
    }]
  }, [_vm._v("2、打包项目")]), _vm._v(" "), _c('p', [_c('code', [_vm._v("hey build")])])])])])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "tmpl": "demo1"
    }
  }, [_c('div', {
    directives: [{
      name: "padding",
      rawName: "v-padding",
      value: (20),
      expression: "20"
    }]
  }, [_c('div', [_vm._v("占值：70%")]), _vm._v(" "), _c('div', [_vm._v("占值：70%")]), _vm._v(" "), _c('div', [_vm._v("占值：70%")]), _vm._v(" "), _c('div', [_vm._v("占值：70%")])])]), _vm._v(" "), _c('div', {
    attrs: {
      "tmpl": "demo2"
    }
  }, [_c('div', {
    directives: [{
      name: "padding",
      rawName: "v-padding",
      value: (20),
      expression: "20"
    }]
  }, [_c('div', [_vm._v("占值：70%")]), _vm._v(" "), _c('div', [_vm._v("占值：70%")]), _vm._v(" "), _c('div', [_vm._v("占值：70%")]), _vm._v(" "), _c('div', [_vm._v("占值：70%")])])]), _vm._v(" "), _c('div', {
    attrs: {
      "tmpl": "demo3"
    }
  }, [_c('div', {
    directives: [{
      name: "padding",
      rawName: "v-padding",
      value: (20),
      expression: "20"
    }]
  }, [_c('div', [_vm._v("占值：70%")]), _vm._v(" "), _c('div', [_vm._v("占值：70%")]), _vm._v(" "), _c('div', [_vm._v("占值：70%")]), _vm._v(" "), _c('div', [_vm._v("占值：70%")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-506c3179", module.exports)
  }
}

/***/ })

});