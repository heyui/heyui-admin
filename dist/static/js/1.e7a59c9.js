webpackJsonp([1],{

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(25)(
  /* script */
  __webpack_require__(175),
  /* template */
  __webpack_require__(179),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui-demo/src/components/login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11aa31ac", Component.options)
  } else {
    hotAPI.reload("data-v-11aa31ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(R, Utils) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Login = __webpack_require__(177);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      login: _Login2.default.parse({}),
      loading: false
    };
  },

  methods: {
    submit: function submit() {
      var _this = this;

      this.loading = true;
      R.Login.login(_Login2.default.dispose(this.login)).then(function (resp) {
        if (resp.ok) {
          var msg = resp.body;
          Utils.saveLocal("token", msg.value);
          _this.$router.replace('/');
        }
        _this.loading = false;
      });
    }
  }
}; //
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26), __webpack_require__(18)))

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Model) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = new Model({
  username: '',
  password: ''
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(70)))

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "page-login"
    }
  }, [_c('div', {
    staticClass: "login-container"
  }, [_c('div', {
    staticClass: "login-title"
  }, [_vm._v("管理系统")]), _vm._v(" "), _c('div', {
    staticClass: "login-name"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.login.username),
      expression: "login.username"
    }],
    attrs: {
      "type": "text",
      "placeholder": "用户名"
    },
    domProps: {
      "value": (_vm.login.username)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.login.username = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "login-password"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.login.password),
      expression: "login.password"
    }],
    attrs: {
      "type": "password",
      "placeholder": "密码"
    },
    domProps: {
      "value": (_vm.login.password)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.submit($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.login.password = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "buttonDiv"
  }, [_c('p', {
    on: {
      "click": _vm.submit
    }
  }, [(_vm.loading) ? _c('i', {
    staticClass: "h-loading"
  }) : _vm._e(), _vm._v("登录")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-11aa31ac", module.exports)
  }
}

/***/ })

});