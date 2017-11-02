webpackJsonp([3],{

/***/ 137:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(25)(
  /* script */
  __webpack_require__(75),
  /* template */
  __webpack_require__(142),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui-demo/src/components/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-243d4704", Component.options)
  } else {
    hotAPI.reload("data-v-243d4704", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(25)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(143),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui-demo/src/components/app/app-header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app-header.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b7e0098", Component.options)
  } else {
    hotAPI.reload("data-v-4b7e0098", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(138)
}
var Component = __webpack_require__(25)(
  /* script */
  __webpack_require__(77),
  /* template */
  __webpack_require__(144),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui-demo/src/components/app/app-menu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app-menu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fc831d74", Component.options)
  } else {
    hotAPI.reload("data-v-fc831d74", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [(!_vm.loading) ? [(_vm.$route.name == 'login') ? [_c('router-view')] : _c('div', [_c('appHead'), _vm._v(" "), _c('div', {
    staticClass: "app-container"
  }, [_c('appMenu'), _vm._v(" "), _c('div', {
    staticClass: "app-body"
  }, [_c('router-view')], 1)], 1)], 1)] : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-243d4704", module.exports)
  }
}

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-header"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "float-right app-header-info"
  }, [_c('span', [_c('a', {
    directives: [{
      name: "font",
      rawName: "v-font",
      value: (20),
      expression: "20"
    }],
    attrs: {
      "href": "https://github.com/heyui/heyui-demo",
      "target": "_blank"
    }
  }, [_c('i', {
    staticClass: "h-icon-github"
  })])]), _vm._v(" "), _c('DropdownMenu', {
    attrs: {
      "class-name": "app-header-dropdown",
      "placement": "bottom-end",
      "datas": _vm.infoMenu
    },
    on: {
      "onclick": _vm.trigger
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.User.name))])])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-header-title"
  }, [_c('a', {
    attrs: {
      "href": "http://www.heyui.top"
    }
  }, [_vm._v("HEYUI")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4b7e0098", module.exports)
  }
}

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-menu"
  }, [_c('Menu', {
    ref: "menu",
    attrs: {
      "datas": _vm.menus,
      "class-name": "h-menu-white"
    },
    on: {
      "onclick": _vm.trigger
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-fc831d74", module.exports)
  }
}

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(HeyUI) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(23);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(139);

var _App2 = _interopRequireDefault(_App);

var _vueRouter = __webpack_require__(22);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _heyuiConfig = __webpack_require__(82);

var _heyuiConfig2 = _interopRequireDefault(_heyuiConfig);

var _routerConfig = __webpack_require__(84);

var _routerConfig2 = _interopRequireDefault(_routerConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(137);

//HeyUI已经设定为全局变量，无需引用
//设定全局变量请参考根目录下的hey.js文件


(0, _heyuiConfig2.default)();
_vue2.default.use(_vueRouter2.default);
_vue2.default.use(HeyUI);

var router = (0, _routerConfig2.default)();

var app = new _vue2.default({
  router: router,
  el: '#app',
  render: function render(h) {
    return h(_App2.default);
  }
});

exports.default = app;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(R, HeyUI) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(45);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _store = __webpack_require__(86);

var _store2 = _interopRequireDefault(_store);

var _appHeader = __webpack_require__(140);

var _appHeader2 = _interopRequireDefault(_appHeader);

var _appMenu = __webpack_require__(141);

var _appMenu2 = _interopRequireDefault(_appMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      loading: true
    };
  },

  store: _store2.default,
  mounted: function mounted() {
    var _this = this;

    this.$Loading("加载中");
    R.User.info().then(function (resp) {
      if (resp.ok) {
        _store2.default.dispatch('updateAccount', resp.body);
        _this.initDict();
      }
    });
  },

  methods: {
    initDict: function initDict() {
      var _this2 = this;

      R.Dict.get().then(function (resp) {
        if (resp.ok) {
          var dicts = resp.body;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator3.default)(dicts), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var dict = _step.value;

              HeyUI.addDict(dict.name, dict.data);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
        _this2.loading = false;
        _this2.$Loading.close();
      });
    }
  },
  components: {
    appHead: _appHeader2.default,
    appMenu: _appMenu2.default
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
//
//
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26), __webpack_require__(11)))

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Utils) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(90);

var _extends3 = _interopRequireDefault(_extends2);

var _vuex = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    return {
      infoMenu: [{ key: 'logout', title: '退出登录', icon: 'h-icon-outbox' }]
    };
  },

  computed: (0, _extends3.default)({}, (0, _vuex.mapState)({
    User: 'User'
  })),
  methods: {
    trigger: function trigger(data) {
      if (data == 'logout') {
        Utils.removeLocal('Auth');
        this.$router.replace('/login');
      }
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menuConfig = __webpack_require__(83);

var _menuConfig2 = _interopRequireDefault(_menuConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      menus: _menuConfig2.default
    };
  },

  watch: {
    $route: function $route() {
      this.menuSelect();
    }
  },
  mounted: function mounted() {
    this.menuSelect();
  },

  methods: {
    menuSelect: function menuSelect() {
      if (this.$route.name) {
        this.$refs.menu.select(this.$route.name);
      }
    },
    trigger: function trigger(data) {
      this.$router.push({ name: data.key });
    }
  }
}; //
//
//
//
//
//
//

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    simple: {
      loadData: loadData,
      keyName: 'id',
      titleName: 'name',
      minWord: 1
    }
  };
};

var _fetchJsonp = __webpack_require__(164);

var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadData = function loadData(filter, callback) {
  (0, _fetchJsonp2.default)('https://suggest.taobao.com/sug?code=utf-8&q=' + filter).then(function (response) {
    return response.json();
  }).then(function (d) {
    var result = d.result;
    var data = [];
    result.forEach(function (r) {
      data.push({
        name: r[0],
        id: r[1]
      });
    });
    callback(data);
  });
};

;

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    simple: {
      title: '测试',
      keyName: 'id',
      parentName: 'parent',
      titleName: 'title',
      dataMode: 'list',
      datas: function datas() {
        return list;
      }
    }
  };
};

var list = [{ id: 1, title: "一级" }, { id: 2, title: "二级" }, { id: 3, title: "三级", disabled: true }, { id: 10, title: "一级-0", parent: "1" }, { id: 11, title: "一级-1", parent: "1" }, { id: 12, title: "一级-2", parent: "1" }, { id: 13, title: "一级-3", parent: "1" }, { id: 14, title: "一级-4", parent: "1" }, { id: 101, title: "一级-0-1", parent: "10" }, { id: 102, title: "一级-0-2", parent: "10" }, { id: 103, title: "一级-0-3", parent: "10" }, { id: 20, title: "二级-0", parent: "2" }, { id: 21, title: "二级-1", parent: "2" }, { id: 22, title: "二级-2", parent: "2" }, { id: 23, title: "二级-3", parent: "2" }, { id: 24, title: "二级-4", parent: "2" }, { id: 30, title: "三级-0", parent: "3" }, { id: 31, title: "三级-1", parent: "3" }, { id: 32, title: "三级-2", parent: "3" }, { id: 33, title: "三级-3", parent: "3" }];
;

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var staticDict = function staticDict() {
  return {
    presenceStatus: {
      0: '离线',
      1: '就绪',
      2: '忙碌',
      3: '离席',
      4: '通话中',
      5: '通话中'
    },
    role: {
      1: '普通坐席',
      2: '坐席管理员'
    },
    phoneStatus: {
      0: '空闲',
      1: '占线',
      2: '振铃',
      3: '媒体音',
      4: '通话中'
    },
    phoneType: {
      1: '模拟话机',
      2: 'IP话机',
      3: '软电话'
    },
    select: [{ title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }],
    simple: { 1: '苹果', 2: '梨子', 3: '香蕉', 4: '橙子', 5: '樱桃' }
  };
};

exports.default = staticDict;

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(HeyUI) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(46);

var _keys2 = _interopRequireDefault(_keys);

var _dictConfig = __webpack_require__(81);

var _dictConfig2 = _interopRequireDefault(_dictConfig);

var _autocompleteConfig = __webpack_require__(79);

var _autocompleteConfig2 = _interopRequireDefault(_autocompleteConfig);

var _treeConfig = __webpack_require__(85);

var _treeConfig2 = _interopRequireDefault(_treeConfig);

var _categoryConfig = __webpack_require__(80);

var _categoryConfig2 = _interopRequireDefault(_categoryConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var heyuiConfig = function heyuiConfig() {
  var staticDict = (0, _dictConfig2.default)();
  (0, _keys2.default)(staticDict).forEach(function (key) {
    HeyUI.addDict(key, staticDict[key]);
  });

  HeyUI.config('dict.keyName', "key");
  HeyUI.config('dict.titleName', "title");

  HeyUI.config("autocomplete.configs", (0, _autocompleteConfig2.default)());
  HeyUI.config("tree.configs", (0, _treeConfig2.default)());
  HeyUI.config("category.configs", (0, _categoryConfig2.default)());

  HeyUI.config('menu', {
    keyName: 'key',
    titleName: 'title',
    childrenName: 'children'
  });
};

exports.default = heyuiConfig;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var menuConfig = [{
  title: '首页',
  key: 'home',
  icon: 'h-icon-home'
}, {
  title: '示例',
  icon: 'h-icon-star-on',
  children: [{
    title: '表单',
    icon: 'h-icon-search',
    key: 'form'
  }]
}];

exports.default = menuConfig;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(HeyUI) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueRouter = __webpack_require__(22);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initRouter = function initRouter() {
  var routerParam = {
    mode: 'history',
    routes: [{
      path: '/',
      name: 'home',
      component: function component(resolve) {
        return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(173)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      }
    }, {
      path: '/login',
      name: 'login',
      component: function component(resolve) {
        return __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(172)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      }
    }, {
      path: '/form',
      name: 'form',
      component: function component(resolve) {
        return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(171)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      }
    }]
  };

  var router = new _vueRouter2.default(routerParam);

  router.beforeEach(function (to, from, next) {
    HeyUI.$LoadingBar.start();
    // if (titleConfig[to.name]) {
    //   document.title = titleConfig[to.name] + ' - 应用';
    // } else {
    // document.title = '管理系统';
    // }
    next();
  });
  router.afterEach(function () {
    HeyUI.$LoadingBar.success();
    // Vue.nextTick(() => {
    //   $('.app-body').scrollTop(0);
    // });
  });
  return router;
};

exports.default = initRouter;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    simple: {
      keyName: 'id',
      parentName: 'parent',
      titleName: 'title',
      dataMode: 'list',
      datas: function datas() {
        return list;
      }
    }
  };
};

var list = [{ id: 1, title: "一级" }, { id: 2, title: "二级" }, { id: 3, title: "三级", disabled: true }, { id: 10, title: "一级-0", parent: "1" }, { id: 11, title: "一级-1", parent: "1" }, { id: 12, title: "一级-2", parent: "1" }, { id: 13, title: "一级-3", parent: "1" }, { id: 14, title: "一级-4", parent: "1" }, { id: 101, title: "一级-0-1", parent: "10" }, { id: 102, title: "一级-0-2", parent: "10" }, { id: 103, title: "一级-0-3", parent: "10" }, { id: 20, title: "二级-0", parent: "2" }, { id: 21, title: "二级-1", parent: "2" }, { id: 22, title: "二级-2", parent: "2" }, { id: 23, title: "二级-3", parent: "2" }, { id: 24, title: "二级-4", parent: "2" }, { id: 30, title: "三级-0", parent: "3" }, { id: 31, title: "三级-1", parent: "3" }, { id: 32, title: "三级-2", parent: "3" }, { id: 33, title: "三级-3", parent: "3" }];

;

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuex = __webpack_require__(24);

var _vuex2 = _interopRequireDefault(_vuex);

var _vue = __webpack_require__(23);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

exports.default = new _vuex2.default.Store({
  state: {
    User: {},
    showMenu: true
  },
  mutations: {
    updateAccount: function updateAccount(state, data) {
      state.User = data;
    },
    updateMenu: function updateMenu(state, isShow) {
      state.showMenu = isShow;
    }
  },
  actions: {
    updateAccount: function updateAccount(context, data) {
      context.commit('updateAccount', data);
    },
    updateMenu: function updateMenu(context, data) {
      context.commit('updateMenu', data);
    }
  },
  getters: {
    account: function account(state) {
      return state.User;
    },
    showMenu: function showMenu(state) {
      return state.showMenu;
    }
  }
});

/***/ })

},[169]);