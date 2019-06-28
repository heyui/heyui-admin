<style lang="less">
.sys-tabs-vue {
  position: relative;
  height: @sys-tabs-height;
  background: #f3f6f8;
  user-select: none;
  z-index: 1;
  .close-con {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 32px;
    background: #fff;
    text-align: center;
    z-index: 10;
  }
  .tabs-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .tabs-body {
      height: 100%;
      box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.09);
      padding: 10px 0 0;
      .h-dropdownmenu {
        display: block;
      }
      .h-dropdowncustom-show-content {
        overflow: hidden;
        padding: 0 8px;
        white-space: nowrap;
        display: flex;
      }
    }
    .tabs-item {
      transition: 0.2s;
      line-height: 36px;
      height: 35px;
      padding: 0 15px 0 15px;
      position: relative;
      max-width: 160px;
      flex: 1;
      margin-left: -4px;
      margin-right: -4px;
      cursor: pointer;
      overflow: hidden;
      &:after {
        content: '';
        display: inline-block;
        position: absolute;
        right: 0;
        height: 20px;
        bottom: 6px;
        border-right: 1px solid #b5b5b5;
      }
      &-title {
        position: relative;
        z-index: 2;
        font-size: 13px;
        overflow: hidden;
        margin-right: 15px;
        .tabs-item-icon {
          position: relative;
          top: -1px;
        }
      }
      &-background {
        position: absolute;
        right: 3px;
        top: 0;
        left: 3px;
        bottom: 0;
        border-radius: 8px 8px 0 0;
      }
      &.tabs-item-chosen,
      &:hover {
        z-index: 1;
        &:after,
        &:before {
          content: '';
          bottom: 0;
          position: absolute;
          top: auto;
          border-right: none;
        }
        &:after {
          width: 0;
          height: 0;
          border-right: 10px solid transparent;
          right: 0px;
          z-index: 3;
        }
        &:before {
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          left: 0px;
          z-index: 3;
        }
      }
      @sysTabHoverColor: #EBECEF;
      &:hover {
        .tabs-item-background {
          background: @sysTabHoverColor;
        }
        &:after {
          border-bottom: 10px solid @sysTabHoverColor;
        }
        &:before {
          border-bottom: 10px solid @sysTabHoverColor;
        }
      }
      &.tabs-item-chosen {
        z-index: 2;

        .tabs-item-background {
          background: #fff;
        }
        &:after {
          border-bottom: 10px solid #fff;
        }
        &:before {
          border-bottom: 10px solid #fff;
        }
      }
      &-close {
        transition: 0.2s;
        font-size: 12px;
        position: absolute;
        right: 10px;
        top: 12px;
        color: #999;
        cursor: pointer;
        border-radius: 50%;
        padding: 4px;
        margin: -4px;
        transform: scale(0.8);
        &:hover {
          color: #333;
          background: #e4e4e4;
        }
      }
    }
  }
  &.sys-tabs-oversize{
    .tabs-item:not(.tabs-item-chosen) {
      padding-right: 10px;
      .tabs-item-close {
        display: none;
      }
      .tabs-item-title {
        margin-right: 0;
      }
    }
  }
}
</style>

<template>
  <div class="sys-tabs-vue" :class="{'sys-tabs-oversize': tagList.length > 15}">
    <div class="tabs-container" ref="scrollOuter">
      <div class="tabs-body">
        <DropdownMenu :datas="menus" @click="trigger" @show="show" trigger="contextMenu" :toggleIcon="false">
          <div v-for="(item, index) of tagList" :key="`sys-tab-${index}`" :index="index" @click="handleClick(item)" class="tabs-item" :class="{'tabs-item-chosen': isCurrentTab(item)}" >
            <div class="tabs-item-background"></div>
            <div class="tabs-item-title">
              <span :class="item.meta.icon" class="tabs-item-icon"></span>
              <span>{{item.meta.title}}</span>
            </div>
            <span class="tabs-item-close h-icon-close" @click.stop="handleClose(item)" v-if="homePage!=item.name"></span>
          </div>
        </DropdownMenu>
      </div>
    </div>
  </div>
</template>

<script>
import { showTitle, routeEqual, isExsit } from './utils';
export default {
  name: 'TagsNav',
  props: {
    value: Object,
    homePage: {
      type: String,
      default: 'Home'
    }
  },
  data() {
    return {
      nowIndex: null,
      tagList: [],
      menus: {}
    };
  },
  computed: {
    currentRouteObj() {
      const { name, params, query } = this.$route;
      return { name, params, query };
    }
  },
  methods: {
    show(event) {
      log(event);
      let parent = event.target.parentNode;
      this.nowIndex = parent.getAttribute('index') || parent.parentNode.getAttribute('index');
      if (this.nowIndex == null) {
        this.menus = {
          closeAll: '关闭所有标签页'
        };
      } else {
        this.menus = {
          closeSelf: '关闭标签页',
          closeOther: '关闭其他标签页',
          closeAll: '关闭所有标签页'
        };
      }
    },
    trigger(key, data, event) {
      if (key == 'closeAll') {
        this.clearTab();
      } else if (this.nowIndex) {
        let item = this.tagList[this.nowIndex];
        if (key == 'closeOther') {
          this.closeOtherTab(item, this.nowIndex);
        } else if (key == 'closeSelf') {
          this.close(item);
        }
      }
    },
    init() {
      this.tagList = Utils.getLocal2Json('SYS_TABS') || [];
      this.gotoTab(this.$route);
    },
    beforeClose() {
      return this.$Confirm('确定要关闭这一页吗');
    },
    handleClose(item) {
      if (item.meta && item.meta.beforeCloseName) {
        return new Promise(this.beforeClose[item.meta.beforeCloseName]).then(close => {
          if (close) {
            this.close(item);
          }
        });
      } else {
        this.close(item);
      }
    },
    close(item) {
      let index = this.tagList.indexOf(item);
      this.tagList.splice(index, 1);
      let newroute = null;
      if (this.isCurrentTab(item)) {
        if (this.tagList.length > index) {
          newroute = this.tagList[index];
        } else if (this.tagList.length > 0) {
          newroute = this.tagList[index - 1];
        } else {
          this.$router.replace({ name: this.homePage });
        }
        if (newroute) this.$router.replace(newroute);
      }
      this.saveLocal();
    },
    handleClick(item) {
      this.$router.push(item);
    },
    showTitleInside(item) {
      return showTitle(item, this);
    },
    isCurrentTab(item) {
      return routeEqual(this.currentRouteObj, item);
    },
    gotoTab(item) {
      if (!item.name) return;
      const { name, query, params, meta } = item;
      let routeObj = { name, query, params, meta: meta || {} };
      if (!isExsit(routeObj, this.tagList)) {
        this.tagList.push(routeObj);
        this.saveLocal();
      }
    },
    closeOtherTab(item, index) {
      if (!this.isCurrentTab(item)) {
        this.$router.push(item);
      }
      this.tagList.splice(0, index);
      this.tagList.splice(1);
      this.saveLocal();
    },
    clearTab() {
      this.tagList = [];
      this.saveLocal();
      if (!this.isCurrentTab({ name: this.homePage })) {
        this.$router.push({ name: this.homePage });
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
    $route(to) {
      this.gotoTab(to);
    }
  }
};
</script>
