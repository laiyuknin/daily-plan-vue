<template>
  <div id="app" class="ui-container">
    <router-view class="router-view"></router-view>
    <!-- <div class="refresh-btn">
      <p>抱歉，服务器出小差啦~</p>
      <ssui-button @btn-click="window.location.reload()">点击刷新</ssui-button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="less">
@import './assets/less/reset.less';

html, body, #app {
  height: 100%;
  width: 100%;
}
#app {
  background: #000;
  color: #FFF;
}
</style>
