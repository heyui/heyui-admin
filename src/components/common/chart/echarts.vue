<style lang="less">
.echarts-vue {
  height: 400px;
  overflow: hidden;
}
</style>

<template>
  <div class="echarts-vue"></div>
</template>

<script>
import debounce from 'lodash.debounce';
import { mapState } from 'vuex';
import { toRaw } from 'vue';

/** index.simple 包含以下四种图表
  require("./lib/chart/line");
  require("./lib/chart/bar");
  require("./lib/chart/pie");
  require("./lib/component/gridSimple");
 */
import echarts from 'echarts/index.simple';
import theme from './theme';

export default {
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    initOption: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    options() {
      if (this.chart) {
        toRaw(this.chart).setOption(this.options);
      }
    },
    pageResizeCount() {
      this.resizeHandler();
    }
  },
  methods: {
    init() {
      const chart = echarts.init(this.$el, theme, this.initOption);
      this.chart = chart;
      chart.setOption(this.options);

      this.resizeHandler = debounce(
        () => {
          if (chart) {
            chart.resize();
          }
        },
        100,
        { leading: true }
      );
      window.addEventListener('resize', this.resizeHandler);
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
    if (this.chart) {
      toRaw(this.chart).dispose();
    }
    this.chart = null;
  },
  computed: {
    ...mapState(['pageResizeCount'])
  }
};
</script>
