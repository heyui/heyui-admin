<template>
  <div>
    <Uploader v-model="file" :dataType="dataType" :multiple="multiple" :displayType="displayType" @update:modelValue="onChange" :option="option" />
  </div>
</template>

<script>
import { upload } from '@js/common/qiniuUpload';
import { message } from 'heyui';

export default {
  props: {
    modelValue: {
      type: [Array, Object, String]
    },
    displayType: String,
    dataType: String,
    multiple: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    file: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  },
  data() {
    return {
      option: {
        async onChange(file) {
          try {
            const url = await upload(file);
            return url;
          } catch (error) {
            message.error(`${file.name}上传失败`);
            throw new Error();
          }
        }
      }
    };
  },
  methods: {
    onChange(value) {
      this.$emit('update:modelValue', value);
    }
  }
};
</script>
