<style lang="less">
.sys-tabs-vue{
  position: relative;
  height: 45px;
  background: #f3f6f8;
  user-select: none;
  z-index: 1;
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
    .tabs-body{
      height: 100%;
      overflow: hidden;
      display: flex;
      white-space: nowrap;
      border-bottom: 3px solid #FFF;
      padding: 8px 8px 0;
    }
    .tabs-item {
      transition: .2s;
      line-height: 36px;
      padding: 0 15px;
      position: relative;
      max-width: 160px;
      flex: 1;
      border-radius: 8px 8px 0 0;
      margin-left: -1px;
      margin-right: -1px;
      &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 10px;
        bottom: 10px;
        border-right: 1px solid #b5b5b5;
      }
      &-title {
        font-size: 13px;
        overflow: hidden;
        margin-right: 15px;
      }
      &.tabs-item-chosen, &:hover {
        z-index: 1;
        &:after,&:before {
          content: '';
          bottom: 0;
          position: absolute;
          top:auto;
          border-right: none;
        }
        &:after {
          width: 0;
          height: 0;
          border-bottom: 10px solid white;
          border-right: 10px solid transparent;
          right: -3px;
          z-index: 3;
        }
        &:before {
          width: 0;
          height: 0;
          border-bottom: 10px solid white;
          border-left: 10px solid transparent;
          left: -3px;
          z-index: 3;
        }
      }
      &:hover {
        background: #f8f9f9;
        &:after {
          border-bottom: 10px solid #f8f9f9;
        }
        &:before {
          border-bottom: 10px solid #f8f9f9;
        }
      }
      &.tabs-item-chosen {
        background: #FFF;
      }
      &-close {
        transition: .2s;
        font-size: 12px;
        position: absolute;
        right: 10px;
        top: 13px;
        color: #999;
        cursor: pointer;
        border-radius: 50%;
        padding: 4px;
        margin: -4px;
        transform: scale(0.8);
        &:hover{
          color: #333;
          background: #e4e4e4;
        }
      }
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
      <div class="tabs-body">
        <span v-for="(item, index) of tagList" :key="`sys-tab-${index}`" @click="handleClick(item)" class="tabs-item" :class="{'tabs-item-chosen': isCurrentTab(item)}">
          <div class="tabs-item-title">
            <span :class="item.meta.icon"></span>
            <span>{{item.meta.title}}</span>
          </div>
          <span class="tabs-item-close h-icon-close" @click.stop="handleClose(item)" v-if="homePage!=item.name"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {showTitle, routeEqual, isExsit} from './utils'
export default {
  name: 'TagsNav',
  props: {
    value: Object,
    homePage: String
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
    init() {
      this.tagList = Utils.getLocal2Json('SYS_TABS') || [];
      this.addTab(this.$route);
    },
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
        this.close(current);
      }
    },
    close (route) {
      let index = this.tagList.indexOf(route);
      this.tagList.splice(index, 1);
      let newroute = null;
      if (this.isCurrentTab(route)) {
        if(this.tagList.length > index) {
          newroute = this.tagList[index]
        } else if (this.tagList.length > 0) {
          newroute = this.tagList[index-1]
        } else {
          this.$router.replace({name: 'Home'});
        }
        if(newroute)this.$router.replace(newroute);
      }
      this.saveLocal();
    },
    handleClick (item) {
      this.$router.push(item);
    },
    showTitleInside (item) {
      return showTitle(item, this)
    },
    isCurrentTab (item) {
      return routeEqual(this.currentRouteObj, item)
    },
    addTab(route) {
      if(!route.name) return;
      const { name, query, params, meta } = route
      let routeObj = { name, query, params, meta: meta || {} };
      if (!isExsit(routeObj, this.tagList)) {
        this.tagList.push(routeObj);
        this.saveLocal();
      }
    },
    saveLocal() {
      Utils.saveLocal('SYS_TABS', this.tagList);
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    '$route' (to) {
      this.addTab(to);
    }
  }
}
</script>