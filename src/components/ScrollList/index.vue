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

      <template v-if="type==='text'">
        <swiper-slide v-for="i in 3" :key="i">
          <span style="font-size: 22px;font-weight: bold;margin-left: 10px;"
                @click="selectText">字体{{i}}</span>
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
      // 选择模板
      selectTemplate(e) {
        const card = this.card
        if (!card) return


        fabric.Image.fromURL(e.target.src, function (img) {
          // img.scaleToWidth(card.width)
          // img.scaleToHeight(card.height)
          img.set({
            scaleX: card.width / img.width,
            scaleY: card.height / img.height,
          })
          card.setBackgroundImage(img, card.renderAll.bind(card))
          card.requestRenderAll()
        })

        // const template = new fabric.Image(e.target)
        // template.scaleToWidth(card.width)
        // template.scaleToHeight(card.height)
        // card.setBackgroundImage(template, card.renderAll.bind(card));
      },
      // 选择装饰
      selectDecorate(e) {
        const card = this.card
        if (!card) return

        fabric.Image.fromURL(e.target.src, function (img) {
          img.set({
            // scaleX: card.width / img.width / 2,
            // scaleY: card.height / img.height / 2,
            scaleX: 0.7,
            scaleY: 0.7,
            hasControls: false,
            borderColor: '#ff8d23'
          });
          card.add(img)
          img.moveTo(1)
        })
      },
      // 选择文字
      selectText() {
        const card = this.card
        if (!card) return

        var textbox = new fabric.Textbox('这是一段文字', {
          left: 50,
          top: 50,
          width: 150,
          fontSize: 20,
          fontWeight: 800,
          hasControls: false,
          borderColor: '#ff8d23'
        });
        card.add(textbox).setActiveObject(textbox);
      },
    }
  }
</script>

<style lang="less" scoped>
  .scroller {
    position: absolute;
    width: 100%;
    min-height: 60px;
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
