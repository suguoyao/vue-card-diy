<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {remHandle} from "@/utils/remHandle";

  export default {
    name: 'App',
    created() {
      const htmlFontSize = remHandle()
      this.setHtmlFontSize(htmlFontSize)
      // this.$store.dispatch('setHtmlFontSize', htmlFontSize)
      window.onresize = function () {
        remHandle()
      };
    },
    methods: {
      ...mapActions(['setHtmlFontSize']),
    }
  }
</script>

<style lang="less">
  @import './styles/index';

  #app {
    width: 100%;
    height: 100%;
  }
</style>
