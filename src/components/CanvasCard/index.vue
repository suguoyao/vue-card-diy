<template>
  <!--<div>-->
  <canvas id="canvas"></canvas>
  <!--</div>-->
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "CanvasCard",
    data() {
      return {
        self: null,
        dpr: window.devicePixelRatio,
      }
    },
    computed: {
      ...mapGetters(['htmlFontSize']),
      cW() {
        // return 9 * this.htmlFontSize
        return this.getRemSize(360, this.htmlFontSize)
      },
      cH() {
        // return 5.7 * this.htmlFontSize
        return this.getRemSize(238, this.htmlFontSize)
      }
    },
    mounted() {
      const card = this.self = new fabric.Canvas('canvas', {
        backgroundColor: 'white'
      })
      const $canvas = document.querySelectorAll('canvas')
      const canvasContainer = document.querySelector('.canvas-container')

      fabric.Object.NUM_FRACTION_DIGITS = 10;
      card.selection = false
      //设置比实际大的canvas,解决高清屏幕下图片模糊
      // card.setWidth(this.cW * this.dpr)
      // card.setHeight(this.cH * this.dpr)
      card.setWidth(this.cW)
      card.setHeight(this.cH)

      // for (let i = 0; i < $canvas.length; i++) {
      //   this.setWHStyle($canvas[i])
      // }
      // this.setWHStyle(canvasContainer)

      this.addCardEventListener(card)
      this.initFrontCard(card)
    },
    beforeDestroy() {

    },
    methods: {
      ...mapActions([
        'initFrontCard',
        'setSelectedObj'
      ]),
      // setWHStyle(dom) {
      //   dom.style.width = this.cW + 'px'
      //   dom.style.height = this.cH + 'px'
      // },
      addCardEventListener(card) {
        card.on('object:added', (e) => {
          console.log('object:added')
        })
        card.on('object:modified', (e) => {
          console.log('object:modified')
        })
        card.on('object:removed', (e) => {
          console.log('object:removed')
        })
        // card.on('object:selected', (e) => {
        //   console.log('object:selected', e.target)
        //   this.setSelectedObj(e.target)
        // })
        card.on('selection:created', (e) => {
          console.log('selection:created', e.target)
          this.setSelectedObj(e.target)
        })
        card.on('selection:updated', (e) => {
          console.log('selection:updated', e.target)
          this.setSelectedObj(e.target)
        })
        card.on('selection:cleared', (e) => {
          console.log('selection:cleared')
          this.setSelectedObj(null)
        })
      }
    }
  }
</script>

<style scoped>

</style>
