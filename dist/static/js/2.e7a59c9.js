webpackJsonp([2],{

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(25)(
  /* script */
  __webpack_require__(174),
  /* template */
  __webpack_require__(181),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui-demo/src/components/demo-modules/form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-853fa58e", Component.options)
  } else {
    hotAPI.reload("data-v-853fa58e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 174:
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

exports.default = {
  data: function data() {
    var that = this;
    return {
      mode: 'single',
      data: {
        int: null,
        number: null,
        url: null,
        email: null,
        tel: null,
        mobile: null,
        input: '',
        textarea: '测试',
        radio: 1,
        rate: null,
        checkbox: [1],
        select1: '人民币',
        select2: '',
        select3: [],
        taginputs: [],
        autocomplete: null,
        money: {
          min: null,
          max: null
        },
        date: null,
        inputs: [],
        things: ['']
      },
      dataParam: {
        1: '男',
        2: '女',
        3: '其他'
      },
      param1: ['美金', '人民币', '卢布'],
      isLoading: false,
      modeParam: {
        single: '一个区块一行',
        block: '标题独立一行',
        twocolumn: '两列一行',
        threecolumn: '三列一行'
      },
      isInputAsyncError: false,
      validationRules: {
        rules: {
          textarea: {
            maxLen: 50,
            minLen: 10
          },
          input: {
            //做异步处理判断(原则上所有的异步判断在提交后同样需要验证)
            //这里的判断不会影响最终的valid结果，所以也可以作为一些验证提示
            validAsync: function validAsync(value, next, parent, data) {
              setTimeout(function () {
                if (value.length == 15 || value.length == 18) {
                  next();
                } else {
                  next("字段长度非15/18位，可能不符合规定");
                }
              }, 10);
            }
          }
        },
        required: ['autocomplete', 'select2', 'select3', 'inputs[].value', 'input', 'radio', 'rate', 'checkbox', 'money', 'date', 'taginputs', 'money.min', 'money.max', 'int', 'number', 'url', 'email', 'tel', 'mobile'],
        int: ['int'],
        number: ['number', 'money.min', 'money.max'],
        url: ['url'],
        email: ['email'],
        tel: ['tel'],
        mobile: ['mobile'],
        combineRules: [{
          parentRef: "money",
          refs: ['min', 'max'],
          valid: {
            valid: 'lessThan',
            message: '起始金额不能大于结束金额'
          }
        }]
      }
    };
  },

  methods: {
    submit: function submit() {
      var _this = this;

      var validResult = this.$refs.form.valid();
      // log(validResult.messages);
      if (validResult.result) {
        this.$Message("验证成功");
        this.isLoading = true;
        setTimeout(function () {
          _this.isLoading = false;
        }, 1000);
      } else {
        this.$Message.error('\u8FD8\u6709' + validResult.messages.length + '\u4E2A\u9519\u8BEF\u672A\u901A\u8FC7\u9A8C\u8BC1\u3002');
      }
    },
    reset: function reset() {
      this.isLoading = false;
      this.$refs.form.reset();
    },
    add: function add() {
      this.data.inputs.push({ value: '' });
    },
    remove: function remove(index) {
      this.data.inputs.splice(index, 1);
    }
  }
};

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "padding",
      rawName: "v-padding",
      value: (20),
      expression: "20"
    }],
    staticClass: "app-form"
  }, [_c('div', {
    staticClass: "h-panel"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "h-panel-body"
  }, [_c('div', {
    directives: [{
      name: "height",
      rawName: "v-height",
      value: (50),
      expression: "50"
    }]
  }, [_c('SwitchList', {
    attrs: {
      "datas": _vm.modeParam,
      "small": true
    },
    model: {
      value: (_vm.mode),
      callback: function($$v) {
        _vm.mode = $$v
      },
      expression: "mode"
    }
  })], 1), _vm._v(" "), _c('Form', {
    ref: "form",
    attrs: {
      "label-width": 110,
      "mode": _vm.mode,
      "model": _vm.data,
      "rules": _vm.validationRules
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "输入框",
      "prop": "input"
    },
    scopedSlots: _vm._u([{
      key: "error",
      fn: function(props) {
        return [(props.type == 'async') ? _c('span', {
          staticClass: "link"
        }, [_vm._v("+++++++错误的特殊提示+++++++")]) : _vm._e()]
      }
    }])
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.input),
      expression: "data.input"
    }, {
      name: "wordlimit",
      rawName: "v-wordlimit",
      value: (30),
      expression: "30"
    }],
    attrs: {
      "type": "text",
      "placeholder": "限制输入30个字"
    },
    domProps: {
      "value": (_vm.data.input)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.input = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "整数",
      "prop": "int"
    }
  }, [_c('Slider', {
    model: {
      value: (_vm.data.int),
      callback: function($$v) {
        _vm.data.int = $$v
      },
      expression: "data.int"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "整数",
      "prop": "int"
    }
  }, [_c('NumberInput', {
    attrs: {
      "min": 0,
      "max": 100
    },
    model: {
      value: (_vm.data.int),
      callback: function($$v) {
        _vm.data.int = $$v
      },
      expression: "data.int"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "只读",
      "readonly": ""
    }
  }, [_vm._v("只读数据")]), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "数字",
      "prop": "number"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.number),
      expression: "data.number"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.data.number)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.number = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "邮箱",
      "prop": "email"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.email),
      expression: "data.email"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.data.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.email = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "网址",
      "prop": "url"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.url),
      expression: "data.url"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.data.url)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.url = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "电话",
      "prop": "tel"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.tel),
      expression: "data.tel"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.data.tel)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.tel = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "手机号码",
      "prop": "mobile"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.mobile),
      expression: "data.mobile"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.data.mobile)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.mobile = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "金额",
      "required": true
    }
  }, [_c('div', {
    staticClass: "h-input-group"
  }, [_c('div', {
    staticClass: "h-input-addon"
  }, [_c('Select', {
    attrs: {
      "datas": _vm.param1,
      "no-border": true,
      "null-option": false
    },
    model: {
      value: (_vm.data.select1),
      callback: function($$v) {
        _vm.data.select1 = $$v
      },
      expression: "data.select1"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "prop": "money.min",
      "label": "起始金额",
      "show-label": false
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.money.min),
      expression: "data.money.min"
    }],
    attrs: {
      "type": "text",
      "placeholder": "起始金额"
    },
    domProps: {
      "value": (_vm.data.money.min)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.money.min = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "h-input-addon"
  }, [_vm._v("-")]), _vm._v(" "), _c('FormItem', {
    attrs: {
      "prop": "money.max",
      "label": "结束金额",
      "show-label": false
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.money.max),
      expression: "data.money.max"
    }],
    attrs: {
      "type": "text",
      "placeholder": "结束金额"
    },
    domProps: {
      "value": (_vm.data.money.max)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.money.max = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "h-input-addon"
  }, [_vm._v("K")])], 1)]), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "选择",
      "prop": "select2"
    }
  }, [_c('Select', {
    attrs: {
      "dict": "simple"
    },
    model: {
      value: (_vm.data.select2),
      callback: function($$v) {
        _vm.data.select2 = $$v
      },
      expression: "data.select2"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "标签",
      "prop": "taginputs"
    }
  }, [_c('TagInput', {
    model: {
      value: (_vm.data.taginputs),
      callback: function($$v) {
        _vm.data.taginputs = $$v
      },
      expression: "data.taginputs"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "多选",
      "prop": "select3"
    }
  }, [_c('Select', {
    attrs: {
      "dict": "simple",
      "multiple": true
    },
    model: {
      value: (_vm.data.select3),
      callback: function($$v) {
        _vm.data.select3 = $$v
      },
      expression: "data.select3"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "日期",
      "prop": "date"
    }
  }, [_c('DatePicker', {
    attrs: {
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.data.date),
      callback: function($$v) {
        _vm.data.date = $$v
      },
      expression: "data.date"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "评分",
      "prop": "rate"
    }
  }, [_c('Rate', {
    attrs: {
      "show-text": true
    },
    model: {
      value: (_vm.data.rate),
      callback: function($$v) {
        _vm.data.rate = $$v
      },
      expression: "data.rate"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "多文本",
      "single": true,
      "prop": "textarea"
    }
  }, [_c('textarea', {
    directives: [{
      name: "autosize",
      rawName: "v-autosize"
    }, {
      name: "wordcount",
      rawName: "v-wordcount",
      value: (50),
      expression: "50"
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.data.textarea),
      expression: "data.textarea"
    }],
    attrs: {
      "rows": "3"
    },
    domProps: {
      "value": (_vm.data.textarea)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.textarea = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "单选",
      "prop": "radio"
    }
  }, [_c('Radio', {
    attrs: {
      "datas": _vm.dataParam
    },
    on: {
      "input": function($event) {
        _vm.data.textarea += '12'
      }
    },
    model: {
      value: (_vm.data.radio),
      callback: function($$v) {
        _vm.data.radio = $$v
      },
      expression: "data.radio"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "多选",
      "prop": "checkbox"
    }
  }, [_c('Checkbox', {
    attrs: {
      "datas": _vm.dataParam
    },
    model: {
      value: (_vm.data.checkbox),
      callback: function($$v) {
        _vm.data.checkbox = $$v
      },
      expression: "data.checkbox"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "模糊匹配",
      "prop": "autocomplete"
    }
  }, [_c('AutoComplete', {
    attrs: {
      "config": "simple"
    },
    model: {
      value: (_vm.data.autocomplete),
      callback: function($$v) {
        _vm.data.autocomplete = $$v
      },
      expression: "data.autocomplete"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "自定义规则",
      "prop": "things[0]",
      "required": ""
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.things[0]),
      expression: "data.things[0]"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.data.things[0])
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        var $$exp = _vm.data.things,
          $$idx = 0;
        if (!Array.isArray($$exp)) {
          _vm.data.things[0] = $event.target.value
        } else {
          $$exp.splice($$idx, 1, $event.target.value)
        }
      }
    }
  })]), _vm._v(" "), _c('FormItemList', _vm._l((_vm.data.inputs), function(item, index) {
    return _c('FormItem', {
      key: item,
      attrs: {
        "label": '输入框' + (index + 1),
        "prop": 'inputs[' + index + '].value'
      }
    }, [_c('Row', {
      attrs: {
        "type": "flex"
      }
    }, [_c('Col', {
      staticClass: "flex1"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.value),
        expression: "item.value"
      }],
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": (item.value)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.value = $event.target.value
        }
      }
    })]), _vm._v(" "), _c('Col', {
      directives: [{
        name: "width",
        rawName: "v-width",
        value: (50),
        expression: "50"
      }],
      staticClass: "text-right"
    }, [_c('Poptip', {
      attrs: {
        "content": "确定删除？"
      },
      on: {
        "confirm": function($event) {
          _vm.remove(index)
        }
      }
    }, [_c('Button', {
      attrs: {
        "text-color": "red",
        "no-border": true,
        "icon": "h-icon-trash"
      }
    })], 1)], 1)], 1)], 1)
  })), _vm._v(" "), _c('FormItem', {
    attrs: {
      "single": true
    }
  }, [_c('Button', {
    attrs: {
      "size": "s",
      "text-color": "blue"
    },
    on: {
      "click": _vm.add
    }
  }, [_vm._v("添加输入框")])], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "no-padding": true
    }
  }, [_c('Button', {
    attrs: {
      "color": "primary",
      "loading": _vm.isLoading
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("提交")]), _vm._v("   \n          "), _c('Button', {
    on: {
      "click": _vm.reset
    }
  }, [_vm._v("重置验证")])], 1)], 1)], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h-panel-bar"
  }, [_c('span', {
    staticClass: "h-panel-title"
  }, [_vm._v("列表")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-853fa58e", module.exports)
  }
}

/***/ })

});