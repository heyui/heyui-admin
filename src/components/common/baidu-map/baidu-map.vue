<style lang='less'>
.baidu-map-vue {
  position: relative;
}
</style>
<template>
  <div class="baidu-map-vue" :style="mapStyle"></div>
</template>
<script>
import load from './load';

export default {
  props: {
    height: {
      type: Number,
      default: 400
    }
  },
  data() {
    return {
    };
  },
  mounted() {
    if (typeof BMap != 'undefined') {
      this.init();
    } else {
      load().then(resp => {
        this.init();
      });
    }
  },
  methods: {
    init() {
      this.$nextTick(() => {
        let map = new BMap.Map(this.$el);
        this.$emit('load', map);
      });
    }
  },
  computed: {
    mapStyle() {
      return {
        height: `${this.height}px`
      };
    }
  }
};
</script>
