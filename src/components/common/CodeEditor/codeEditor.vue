<template>
  <div class="code-editor-vue" ref="editor" :style="divStyle" :class="className"></div>
</template>

<script>
import ace from 'brace';

import props from './props';

const editorOptions = [
  'minLines',
  'maxLines',
  'readOnly',
  'highlightActiveLine',
  'tabSize',
  'enableBasicAutocompletion',
  'enableLiveAutocompletion',
  'enableSnippets'
];

export default {
  props,
  computed: {
    divStyle() {
      const { width, height, style } = this.$props;
      const divStyle = { width, height, ...style };
      return divStyle;
    }
  },
  watch: {
    mode: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.editor.getSession().setMode('ace/mode/' + newVal);
      }
    },
    theme: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.editor.setTheme('ace/theme/' + newVal);
      }
    },
    fontSize: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.editor.setFontSize(newVal);
      }
    },
    keyboardHandler: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal) {
          this.editor.setKeyboardHandler('ace/keyboard/' + newVal);
        } else {
          this.editor.setKeyboardHandler(null);
        }
      }
    },
    wrapEnabled: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.editor.getSession().setUseWrapMode(newVal);
      }
    },
    showPrintMargin: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.editor.setShowPrintMargin(newVal);
      }
    },
    showGutter: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.editor.renderer.setShowGutter(newVal);
      }
    },
    setOptions: function (newVal, oldVal) {
      this.handleOptions(this.$props);
    },
    markers: function (newVal, oldVal) {
      if (Array.isArray(newVal)) {
        this.handleMarkers(newVal);
      }
    },
    annotations: function (newVal, oldVal) {
      this.editor.getSession().setAnnotations(newVal || []);
    },
    scrollMargin: function (newVal, oldVal) {
      this.handleScrollMargins(newVal);
    },
    width: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.editor.resize();
      }
    },
    height: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.editor.resize();
      }
    },
    focus: function (newVal, oldVal) {
      if (newVal && !oldVal) {
        this.editor.focus();
      }
    },
    value: function (newVal, oldVal) {
      if (this.editor && this.editor.getValue() !== newVal) {
        this.silent = true;
        const pos = this.editor.session.selection.toJSON();
        this.editor.setValue(newVal);
        this.editor.session.selection.fromJSON(pos);
        this.silent = false;
      }
    },
    $props: function (newVal, oldVal) {
      for (let i = 0; i < editorOptions.length; i++) {
        const option = editorOptions[i];
        if (newVal[option] !== oldVal[option]) {
          this.editor.setOption(option, newVal[option]);
        }
      }
    },
    deep: true
  },
  mounted() {
    const {
      readonly,
      onBeforeLoad,
      onValidate,
      mode,
      focus,
      theme,
      fontSize,
      value,
      cursorStart,
      showGutter,
      wrapEnabled,
      showPrintMargin,
      scrollMargin,
      keyboardHandler,
      onLoad,
      commands,
      annotations,
      markers
    } = this.$props;

    this.editor = ace.edit(this.$el);

    if (onBeforeLoad) {
      onBeforeLoad(ace);
    }

    const editorProps = Object.keys(this.$props.editorProps);

    for (let i = 0; i < editorProps.length; i++) {
      this.editor[editorProps[i]] = this.$props.editorProps[editorProps[i]];
    }
    if (this.$props.debounceChangePeriod) {
      this.onChangeUpdate = this.debounce(
        this.onChangeUpdate,
        this.$props.debounceChangePeriod
      );
    }
    this.editor.renderer.setScrollMargin(
      scrollMargin[0],
      scrollMargin[1],
      scrollMargin[2],
      scrollMargin[3]
    );
    this.editor.getSession().setMode(`ace/mode/${mode}`);
    if (readonly === true) this.editor.setReadOnly(true);
    this.editor.setTheme(`ace/theme/${theme}`);
    this.editor.setFontSize(fontSize);
    this.editor.getSession().setValue(value, cursorStart);
    this.editor.navigateFileEnd();
    this.editor.renderer.setShowGutter(showGutter);
    this.editor.getSession().setUseWrapMode(wrapEnabled);
    this.editor.setShowPrintMargin(showPrintMargin);
    this.editor.on('focus', this.onFocusUpdate);
    this.editor.on('blur', this.onBlurUpdate);
    this.editor.on('copy', this.onCopyUpdate);
    this.editor.on('paste', this.onPasteUpdate);
    this.editor.on('change', this.onChangeUpdate);
    this.editor.on('input', this.onInputUpdate);
    this.editor
      .getSession()
      .selection.on('changeSelection', this.selectionChange);
    this.editor.getSession().selection.on('changeCursor', this.cursorChange);
    // this.editor.getSession().foldAll();
    if (onValidate) {
      this.editor.getSession().on('changeAnnotation', () => {
        const annotations = this.editor.getSession().getAnnotations();
        this.$props.onValidate(annotations);
      });
    }
    this.editor.session.on('changeScrollTop', this.onScrollUpdate);
    this.editor.getSession().setAnnotations(annotations || []);
    if (markers && markers.length > 0) {
      this.handleMarkers(markers);
    }

    // get a list of possible options to avoid 'misspelled option errors'
    const availableOptions = this.editor.$options;
    for (let i = 0; i < editorOptions.length; i++) {
      const option = editorOptions[i];
      if (availableOptions.hasOwnProperty(option)) {
        this.editor.setOption(option, this.$props[option]);
      } else if (this.$props[option]) {
        console.warn(
          `VueAce: editor option ${option} was activated but not found. Did you need to import a related tool or did you possibly mispell the option?`
        );
      }
    }
    this.handleOptions(this.$props);

    if (Array.isArray(commands)) {
      commands.forEach(command => {
        if (typeof command.exec === 'string') {
          this.editor.commands.bindKey(command.bindKey, command.exec);
        } else {
          this.editor.commands.addCommand(command);
        }
      });
    }

    if (keyboardHandler) {
      this.editor.setKeyboardHandler('ace/keyboard/' + keyboardHandler);
    }

    if (focus) {
      this.editor.focus();
    }

    if (onLoad) {
      onLoad(this.editor);
    }

    this.editor.resize();
  }, // Methods
  methods: {
    debounce(fn, delay) {
      var timer = null;
      return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
          fn.apply(context, args);
        }, delay);
      };
    },
    handleScrollMargins(margins = [0, 0, 0, 0]) {
      this.editor.renderer.setScrollMargins(
        margins[0],
        margins[1],
        margins[2],
        margins[3]
      );
    },
    onChangeUpdate(event) {
      const value = this.editor.getValue();
      this.$emit('change', value);
    },
    selectionChange(event) {
      if (this.$props.onSelectionChange) {
        const value = this.editor.getSelection();
        this.$props.onSelectionChange(value, event);
      }
    },
    cursorChange(event) {
      if (this.$props.onCursorChange) {
        const value = this.editor.getSelection();
        this.$props.onCursorChange(value, event);
      }
    },
    onInputUpdate(event) {
      const value = this.editor.getValue();
      this.$emit('input', value);
    },
    onFocusUpdate(event) {
      if (this.$props.onFocus) {
        this.$props.onFocus(event);
      }
    },
    onBlurUpdate(event) {
      if (this.$props.onBlur) {
        this.$props.onBlur(event, this.editor);
      }
    },
    onCopyUpdate(text) {
      if (this.$props.onCopy) {
        this.$props.onCopy(text);
      }
    },
    onPasteUpdate(text) {
      if (this.$props.onPaste) {
        this.props.onPaste(text);
      }
    },
    onScrollUpdate() {
      if (this.$props.onScroll) {
        this.$props.onScroll(this.editor);
      }
    },
    handleOptions(props) {
      const setOptions = Object.keys(props.setOptions);
      for (let y = 0; y < setOptions.length; y++) {
        this.editor.setOption(setOptions[y], props.setOptions[setOptions[y]]);
      }
    },
    handleMarkers(markers) {
      // remove foreground markers
      let currentMarkers = this.editor.getSession().getMarkers(true);
      for (const i in currentMarkers) {
        if (currentMarkers.hasOwnProperty(i)) {
          this.editor.getSession().removeMarker(currentMarkers[i].id);
        }
      }
      // remove background markers
      currentMarkers = this.editor.getSession().getMarkers(false);
      for (const i in currentMarkers) {
        if (currentMarkers.hasOwnProperty(i)) {
          this.editor.getSession().removeMarker(currentMarkers[i].id);
        }
      }
      // add new markers
      markers.forEach(
        ({
          startRow,
          startCol,
          endRow,
          endCol,
          className,
          type,
          inFront = false
        }) => {
          const range = new Range(startRow, startCol, endRow, endCol);
          this.editor.getSession().addMarker(range, className, type, inFront);
        }
      );
    }
  },
  beforeDestroy() {
    this.editor.destroy();
    this.editor = null;
  }
};
</script>
