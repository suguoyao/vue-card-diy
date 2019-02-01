<template>
  <div class="scroller">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <template v-if="type==='template'">
        <swiper-slide v-for="i in 2" :key="i">
          <img :src="'https://sugars.oss-cn-shenzhen.aliyuncs.com/diy/template/t'+i+'.jpg'" alt=""
               @click="selectTemplate">
        </swiper-slide>
      </template>

      <template v-if="type==='decorate'">
        <swiper-slide v-for="i in 3" :key="i">
          <img :src="'https://sugars.oss-cn-shenzhen.aliyuncs.com/diy/decorate/decorate'+i+'.png'" alt=""
               @click="selectDecorate">
        </swiper-slide>
      </template>

      <template v-if="type==='text'">
        <swiper-slide v-for="i in 3" :key="i">
          <span style="font-size: 22px;font-weight: bold;margin-left: 10px;"
                @click="selectText">字体{{i}}</span>
        </swiper-slide>
      </template>

      <template v-if="type==='layer'">
        <swiper-slide class="layer-list" v-for="(obj,i) in layerList" :key="i">
          <div class="item" :class="{active:obj===selectedObj}"
               @click="selectLayerItem(obj,i)">
            <img v-if="obj.type === 'image'" :src="obj._element.src" alt="">
            <p v-if="obj.type === 'textbox'" class="text">{{obj.text}}</p>
          </div>
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  import {mapGetters, mapActions} from 'vuex'

  import {rangeNum} from "@/utils"

  // import {insertDecorate} from "@/utils/operating"

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
        default: 10
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
      ...mapGetters([
        'card',
        'selectedObj',
      ]),
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      layerList() {
        return this.card.getObjects()
      }
    },
    watch: {
      // 监听object选中变化
      // 图层layer滚动到对应object
      selectedObj() {
        // console.log('selectedObj change');
      }
    },
    mounted() {
      console.log('mounted');
      this.swiper.slideTo(0, 500, false)
    },
    updated() {
      // console.log('updated');
      // this.swiper.slideTo(0, 500, false)
    },
    beforeDestroy() {
      // this.swiper.destroy()
    },
    methods: {
      ...mapActions([
        'saveState',
      ]),
      // 选择模板
      selectTemplate(e) {
        const card = this.card
        if (!card) return


        fabric.Image.fromURL(e.target.src, (img) => {
          img.set({
            scaleX: card.width / img.width,
            scaleY: card.height / img.height,
          })
          card.setBackgroundImage(img, card.renderAll.bind(card))
          card.requestRenderAll()

          this.saveState()
        }, {crossOrigin: 'anonymous'})
      },
      // 选择装饰
      selectDecorate(e) {
        const card = this.card
        if (!card) return

        fabric.Image.fromURL(e.target.src, (img) => {
          img.set({
            scaleX: 0.7,
            scaleY: 0.7,
            angle: 0,
            left: rangeNum(10, card.width / 2),
            top: rangeNum(10, card.height / 2),
            hasControls: false,
            borderColor: '#ff8d23',
          });
          card.add(img).setActiveObject(img)

          this.saveState()
        }, {crossOrigin: 'anonymous'})
      },
      // 选择文字
      selectText() {
        const card = this.card
        if (!card) return

        const textbox = new fabric.Textbox('这是一段文字', {
          left: 50,
          top: 50,
          width: 150,
          fontSize: 20,
          fontWeight: 800,
          hasControls: false,
          borderColor: '#ff8d23',
          editingBorderColor: '#ff8d23',
        });
        card.add(textbox).setActiveObject(textbox)
        this.saveState()
      },
      // 选中图层中的Object
      // 在图层过多时，方便于快速选中
      selectLayerItem(object, index) {
        const card = this.card
        if (!card) return

        card.setActiveObject(object)
        card.renderAll()
        // this.swiper.slideTo(index, 500, false)
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

    .layer-list {
      .item {
        display: inline-block;
        box-sizing: border-box;
        overflow: hidden;

        &.active {
          border: 1px solid #ff8d23;
        }
      }

      .text {
        width: 100px;
        word-break: break-all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>
