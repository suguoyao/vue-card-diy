<template>
  <div class="container">
    <canvas-card></canvas-card>


    <tabbar>
      <tabbar-item>
        <span slot="label">图片</span>
      </tabbar-item>
      <tabbar-item>
        <span slot="label">模板</span>
      </tabbar-item>
      <tabbar-item selected>
        <span slot="label">装饰</span>
      </tabbar-item>
      <tabbar-item>
        <span slot="label">文字</span>
      </tabbar-item>
      <tabbar-item>
        <span slot="label">图层</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import CanvasCard from '@/components/CanvasCard'
  // require styles
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  import {
    Tabbar,
    TabbarItem,
  } from 'vux'

  export default {
    name: 'HelloWorld',
    components: {
      swiper,
      swiperSlide,
      CanvasCard,
      Tabbar,
      TabbarItem,
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less" scoped>

</style>
