<style lang="less">
</style>

<template>
  <div class="rich-text-editor-vue">
  </div>
</template>

<script>
import WangEditor from 'wangeditor';
import '../../css/richtext-editor.less';

export default {
  name: 'RichTextEditor',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'html' // html, text
    },
    cache: {
      type: Boolean,
      default: true // 是否开启本地存储
    }
  },
  methods: {
    setHtml(val) {
      this.editor.txt.html(val);
    }
  },
  mounted() {
    this.editor = new WangEditor(this.$el);
    // 开启图片复制
    this.editor.customConfig.uploadImgShowBase64 = true;
    this.editor.customConfig.onchange = (html) => {
      let text = this.editor.txt.text();
      if (this.cache) localStorage.editorCache = html;
      this.$emit('input', this.valueType === 'html' ? html : text);
      this.$emit('change', html, text);
    };
    this.editor.create();
    let html = this.value || localStorage.editorCache;
    if (html) this.editor.txt.html(html);
  }
};
</script>
