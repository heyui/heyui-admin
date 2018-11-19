<style lang="less">
.sys-tabs-vue{
  // position: relative;
  border-top: 1px solid #F0F0F0;
  border-bottom: 1px solid #F0F0F0;
  right: 0;
  position: fixed;
  height: 45px;
  top: 60px;
  left: 240px;
  background: #eee;
  user-select: none;
  .close-con{
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 32px;
    background: #fff;
    text-align: center;
    z-index: 10;
  }
  .tabs-container{
    position: absolute;
    // left: 28px;
    // right: 61px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-shadow: 0px 0 3px 2px rgba(100,100,100,.1) inset;
    .tabs-body{
      height: ~"calc(100% - 1px)";
      display: inline-block;
      padding: 1px 4px 0;
      position: absolute;
      overflow: visible;
      white-space: nowrap;
      transition: left .3s ease;
    }
  }
  .contextmenu {
    position: absolute;
    margin: 0;
    padding: 5px 0;
    background: #fff;
    z-index: 100;
    list-style-type: none;
    border-radius: 4px;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
    li {
      margin: 0;
      padding: 5px 15px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>

<template>
  <div class="sys-tabs-vue">
    <div class="tabs-container" ref="scrollOuter">
      <div ref="scrollBody" class="tabs-body" :style="{left: tagBodyLeft + 'px'}">
        <span v-for="(item, index) of list" :key="`sys-tab-${index}`" @click="handleClick(item)" :class="{'chosen': isCurrentTab(item)}">
          <span>{{showTitleInside(item)}}</span>
          <span class="h-icon-close" @click.stop="handleClose(item)"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { showTitle, routeEqual } from './utils'
export default {
  name: 'TagsNav',
  props: {
    value: Object,
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      tagList: []
    }
  },
  computed: {
    currentRouteObj () {
      const { name, params, query } = this.$route;
      return { name, params, query }
    }
  },
  methods: {
    beforeClose() {
      return this.$Confirm('确定要关闭这一页吗');
    },
    handleClose (current) {
      if (current.meta && current.meta.beforeCloseName && current.meta.beforeCloseName in beforeClose) {
        new Promise(this.beforeClose[current.meta.beforeCloseName]).then(close => {
          if (close) {
            this.close(current)
          }
        })
      } else {
        this.close(current)
      }
    },
    close (route) {
      let res = this.list.filter(item => !routeEqual(route, item))
      this.$emit('on-close', res, undefined, route)
    },
    handleClick (item) {
      this.$emit('input', item)
    },
    showTitleInside (item) {
      return showTitle(item, this)
    },
    isCurrentTab (item) {
      return routeEqual(this.currentRouteObj, item)
    }
  },
  watch: {
    '$route' (to) {
    }
  },
  mounted () {
  }
}
</script>