<style lang='less'>
.icons-vue {
  .h-row>div>div {
    background: rgb(240, 246, 255);
    border-radius: 3px;
    padding: 20px 5px;
    text-align: center;
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    [class^="icon-"], [class*=" icon-"]{
        font-size: 28px;
    }
    p{
        margin: 10px 0px;
    }
  }
}
</style>
<template>
  <div class="icons-vue h-panel frame-page">
    <div class="h-panel-bar">
      <span class="h-panel-title">Icons</span>
    </div>
    <div class="h-panel-body">
      <Row :space="25">
        <Cell v-for='n of icons' :xs='12' :sm='12' :md='6' :lg='4' :xl='3' :key="n">
          <div>
            <p><i :class="n"></i></p>
            <p>{{n}}</p>
          </div>
        </Cell>
      </Row>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      icons: [
        'icon-eye',
        'icon-paper-clip',
        'icon-mail',
        'icon-toggle',
        'icon-layout',
        'icon-link',
        'icon-bell',
        'icon-lock',
        'icon-unlock',
        'icon-ribbon',
        'icon-image',
        'icon-signal',
        'icon-target',
        'icon-clipboard',
        'icon-clock',
        'icon-watch',
        'icon-air-play',
        'icon-camera',
        'icon-video',
        'icon-disc',
        'icon-printer',
        'icon-monitor',
        'icon-server',
        'icon-cog',
        'icon-heart',
        'icon-paragraph',
        'icon-align-justify',
        'icon-align-left',
        'icon-align-center',
        'icon-align-right',
        'icon-book',
        'icon-layers',
        'icon-stack',
        'icon-stack-2',
        'icon-paper',
        'icon-paper-stack',
        'icon-search',
        'icon-zoom-in',
        'icon-zoom-out',
        'icon-reply',
        'icon-circle-plus',
        'icon-circle-minus',
        'icon-circle-check',
        'icon-circle-cross',
        'icon-square-plus',
        'icon-square-minus',
        'icon-square-check',
        'icon-square-cross',
        'icon-microphone',
        'icon-record',
        'icon-skip-back',
        'icon-rewind',
        'icon-play',
        'icon-pause',
        'icon-stop',
        'icon-fast-forward',
        'icon-skip-forward',
        'icon-shuffle',
        'icon-repeat',
        'icon-folder',
        'icon-umbrella',
        'icon-moon',
        'icon-thermometer',
        'icon-drop',
        'icon-sun',
        'icon-cloud',
        'icon-cloud-upload',
        'icon-cloud-download',
        'icon-upload',
        'icon-download',
        'icon-location',
        'icon-location-2',
        'icon-map',
        'icon-battery',
        'icon-head',
        'icon-briefcase',
        'icon-speech-bubble',
        'icon-anchor',
        'icon-globe',
        'icon-box',
        'icon-reload',
        'icon-share',
        'icon-marquee',
        'icon-marquee-plus',
        'icon-marquee-minus',
        'icon-tag',
        'icon-power',
        'icon-command',
        'icon-alt',
        'icon-esc',
        'icon-bar-graph',
        'icon-bar-graph-2',
        'icon-pie-graph',
        'icon-star',
        'icon-arrow-left',
        'icon-arrow-right',
        'icon-arrow-up',
        'icon-arrow-down',
        'icon-volume',
        'icon-mute',
        'icon-content-right',
        'icon-content-left',
        'icon-grid',
        'icon-grid-2',
        'icon-columns',
        'icon-loader',
        'icon-bag',
        'icon-ban',
        'icon-flag',
        'icon-trash',
        'icon-expand',
        'icon-contract',
        'icon-maximize',
        'icon-minimize',
        'icon-plus',
        'icon-minus',
        'icon-check',
        'icon-cross',
        'icon-move',
        'icon-delete',
        'icon-menu',
        'icon-archive',
        'icon-inbox',
        'icon-outbox',
        'icon-file',
        'icon-file-add',
        'icon-file-subtract',
        'icon-help',
        'icon-open',
        'icon-ellipsis'
      ]
    };
  },
  mounted() {
  },
  methods: {
  },
  computed: {

  }
};
</script>
