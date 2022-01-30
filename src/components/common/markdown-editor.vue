<style lang="less">
.markdown-editor-vue {
  position: relative;
  display: flex;
  border: 1px solid #eee;
  border-radius: 5px;

  .markdown-show {
    overflow: auto;
    flex: 1;
    height: 500px;
    padding: 10px 20px;
  }

  .markdown-edit {
    border-right: 1px solid #eee;
    width: 50%;
  }
}
</style>

<template>
  <div class="markdown-editor-vue">
    <div v-if="!readonly" class="markdown-edit">
      <div class="markdown-edit-header"></div>
      <CodeEditor v-model="editValue" mode="markdown" @change="change" />
    </div>
    <div v-html="html" class="markdown-show markdown-info-show"></div>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  props: {
    modelValue: String,
    readonly: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      html: '',
      editValue: ''
    };
  },
  watch: {
    modelValue: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.parse();
      }
    }
  },
  mounted() {
    this.parse();
  },
  methods: {
    parse() {
      this.editValue = this.modelValue;
      this.html = marked(this.modelValue);
    },
    change() {
      this.$emit('update:modelValue', this.editValue);
    }
  }
};
</script>
