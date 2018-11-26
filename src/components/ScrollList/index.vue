<template>
  <div class="scroller">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <template v-if="type==='template'">
        <swiper-slide v-for="i in 2" :key="i">
          <img :src="'../static/img/template/'+i+'.jpg'" alt=""
               @click="selectTemplate">
        </swiper-slide>
      </template>

      <template v-if="type==='decorate'">
        <swiper-slide v-for="i in 3" :key="i">
          <img :src="'../static/img/decorate/decorate'+i+'.png'" alt=""
               @click="selectDecorate">
        </swiper-slide>
      </template>

    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  import {mapGetters} from 'vuex'

  import {insertDecorate} from "@/utils/operating"

  export default {
    name: "ScrollList",
    components: {
      swiper,
      swiperSlide,
    },
    props: {
      type: {
        type: String,
        default: ''
      },
      between: {
        type: Number,
        default: 30
      }
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: this.between,
          freeMode: true,
          // preloadImages: false,
          // updateOnImagesReady: false,
          // centeredSlides: true,
        }
      }
    },
    computed: {
      ...mapGetters(['card']),
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      console.log('mounted');
      this.swiper.slideTo(0, 500, false)
    },
    updated() {
      console.log('updated');
      this.swiper.slideTo(0, 500, false)
    },
    beforeDestroy() {
      // this.swiper.destroy()
    },
    methods: {
      selectTemplate(e) {
        const card = this.card
        if (!card) return


        fabric.Image.fromURL(e.target.src, function (img) {
          img.scaleToWidth(card.width)
          img.scaleToHeight(card.height)
          card.setBackgroundImage(img)
          card.requestRenderAll()
        })

        // const template = new fabric.Image(e.target)
        // template.scaleToWidth(card.width)
        // template.scaleToHeight(card.height)
        // card.setBackgroundImage(template, card.renderAll.bind(card));
      },
      selectDecorate(e) {
        const card = this.card
        if (!card) return

        const decorate = new fabric.Image(e.target, {
          borderColor: '#ff8d23',
        })
        decorate.set('width', e.target.naturalWidth)
        decorate.set('height', e.target.naturalHeight)
        decorate.hasControls = false
        card.insertAt(decorate, card.getObjects().legnth + 1).setActiveObject(decorate)
        // decorate.moveTo(card.getObjects().legnth)
        // card.add(decorate)
      },

    }
  }
</script>

<style lang="less" scoped>
  .scroller {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 56px;
    padding: 10px 0;
    background-color: #eff5f8;
    overflow: hidden;
    .swiper-wrapper {
      display: flex;
      .swiper-slide {
        flex: 1;
      }
    }
    img {
      display: inline-block;
      height: 60px;
      float: left;
      line-height: 100px;
      margin: 0 10px;
    }
  }
</style>
