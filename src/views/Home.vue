<template>
  <div class="app-container">
    <top-header></top-header>

    <canvas-card></canvas-card>

    <action-bar></action-bar>

    <tabs></tabs>
  </div>
</template>

<script>
  import TopHeader from '@/components/TopHeader'
  import CanvasCard from '@/components/CanvasCard'
  import ActionBar from '@/components/ActionBar'
  import Tabs from '@/components/Tabs'

  export default {
    name: 'HelloWorld',
    components: {
      TopHeader,
      CanvasCard,
      ActionBar,
      Tabs,
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less" scoped>

</style>
