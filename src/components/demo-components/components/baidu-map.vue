<style lang='less'>
</style>
<template>
  <div class="h-panel frame-page">
    <div class="h-panel-bar">
      <span class="h-panel-title">百度地图展示</span>
    </div>
    <div class="h-panel-bar">
      <Search type="text" v-model="loc" placeholder="输入地址定位" showSearchButton @search="search" />
    </div>
    <div class="h-panel-body">
      <BaiduMap @load="initMap"></BaiduMap>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loc: null,
      map: null
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {},
    initMap(map) {
      this.map = map;
      map.addControl(
        new BMap.MapTypeControl({
          // eslint-disable-next-line no-undef
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      map.centerAndZoom('上海', 15);
      map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
    },
    search() {
      let map = this.map;
      var local = new BMap.LocalSearch(map, {
        renderOptions: { map: map }
      });
      local.search(this.loc);
    }
  },
  computed: {}
};
</script>
