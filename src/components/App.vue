<template>
  <div id="app">
    <appHead></appHead>
    <div class="app-container">
      <div class="app-left">
        <appMenu></appMenu>
      </div>
      <div class="app-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>

import appHead from './app/app-header';
import appMenu from './app/app-menu';
export default {
  data() {
    return {
    }
  },
  methods: {},
  components: {
    appHead,
    appMenu
  }
}
</script>
