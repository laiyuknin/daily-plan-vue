<template>
  <div id="app">
    <router-view/>
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
