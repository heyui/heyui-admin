<style lang='less'>
.app-header-message-vue {
  float: left;
  margin-right: 15px;
  .h-dropdowncustom-show {
    height: @layout-header-height;
    .app-header-icon-item {
      margin-right: 0;
    }
    &.h-pop-trigger {
      background: @hover-background-color;
    }
  }
}
.app-message-dropdown-dropdown-container {
  width: 300px;
  min-height: 300px;
  .message-list-container {
    .common-list-item {
      cursor: pointer;
      padding: 0px 25px;
      &:hover {
        background: @hover-background-color;
      }
      .description {
        font-size: 13px;
        color: @gray-color;
      }

      .title {
        position: relative;
      }

      &.readed {
        color: @gray-color;
      }

      &.unReaded .title:before{
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        background: @red-color;
        border-radius: 5px;
        left: -10px;
        top: 5px;
      }
    }
  }
}
</style>
<template>
  <DropdownCustom class="app-header-message-vue" placement="bottom-end" className="app-message-dropdown" :toggleIcon="false" ref="messageDropdown">
    <div class="app-header-icon-item">
      <Badge :count="msgCount.messages">
        <i class="h-icon-bell"></i>
      </Badge>
    </div>
    <div slot="content">
      <div class="h-panel">
        <div class="h-panel-bar h-panel-bar-s">
          <span class="h-panel-title">消息</span>
        </div>
        <div class="message-list-container common-list-container">
          <div class="common-list-item" v-for="m of messageList" :key="m.id" @click="goMessageDetail(m)" :class="{readed: m.isReaded, unReaded: !m.isReaded}">
            <div class="common-list-meta">
              <p class="title">{{m.title}}</p>
              <p class="description">{{m.description}}</p>
            </div>
          </div>
        </div>
        <div v-if="messageList.length>0" class="text-center h-panel-bar"><span class="link">查看更多</span></div>
      </div>
    </div>
  </DropdownCustom>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      messageList: []
    };
  },
  mounted() {
    this.getMessageList();
  },
  methods: {
    init() {

    },
    getMessageList: async function () {
      let resp = await R.Home.getMessageList();
      if (resp.ok) {
        this.messageList = resp.body;
      }
    },
    goMessageDetail() {
      this.$refs.messageDropdown.hide();
    }
  },
  computed: {
    ...mapGetters({
      user: 'User',
      msgCount: 'msgCount'
    })
  }
};
</script>
