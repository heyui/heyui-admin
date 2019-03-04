export default {
  mode: {
    type: String,
    default: ''
  },
  focus: {
    type: Boolean,
    default: false
  },
  theme: {
    type: String,
    default: 'tomorrow'
  },
  orientation: {
    type: String,
    default: 'beside'
  },
  splits: {
    type: Number,
    default: 2
  },
  name: {
    type: String,
    default: 'brace-editor'
  },
  className: {
    type: String
  },
  height: {
    type: String,
    default: '500px'
  },
  width: {
    type: String,
    default: '100%'
  },
  fontSize: {
    type: [String, Number],
    default: 14
  },
  showGutter: {
    type: Boolean,
    default: true
  },
  onChange: {
    type: Function,
    default: null
  },
  onCopy: {
    type: Function,
    default: null
  },
  onPaste: {
    type: Function,
    default: null
  },
  onFocus: {
    type: Function
  },
  onInput: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onScroll: {
    type: Function,
    default: null
  },
  value: {
    type: String
  },
  onLoad: {
    type: Function,
    default: null
  },
  onSelectionChange: {
    type: Function
  },
  onCursorChange: {
    type: Function
  },
  onBeforeLoad: {
    type: Function
  },
  onValidate: {
    type: Function
  },
  minLines: {
    type: Number,
    default: null
  },
  maxLines: {
    type: Number,
    default: null
  },
  readOnly: {
    type: Boolean,
    default: false
  },
  highlightActiveLine: {
    type: Boolean,
    default: true
  },
  tabSize: {
    type: Number,
    default: 2
  },
  showPrintMargin: {
    type: Boolean,
    default: false
  },
  cursorStart: {
    type: Number,
    default: 1
  },
  debounceChangePeriod: {
    type: Number
  },
  editorProps: {
    type: Object,
    default: function () {
      return { $blockScrolling: true };
    }
  },
  setOptions: {
    type: Object,
    default: function () {
      return {};
    }
  },
  styles: {
    type: Object,
    default: function () {
      return {};
    }
  },
  scrollMargin: {
    type: Array,
    default: function () {
      return [ 0, 0, 0, 0 ];
    }
  },
  annotations: {
    type: Array
  },
  markers: {
    type: Array
  },
  keyboardHandler: {
    type: String
  },
  wrapEnabled: {
    type: Boolean,
    default: true
  },
  enableBasicAutocompletion: {
    type: [Boolean, Array],
    default: false
  },
  enableLiveAutocompletion: {
    type: [Boolean, Array],
    default: false
  },
  commands: {
    type: Array
  }
};
