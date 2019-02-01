<template>
  <mu-container v-if="selectedObj" class="button-wrapper">
    <div>
      <mu-button fab small color="primary" @click="rotateObject">
        <mu-icon value="rotate_90_degrees_ccw"></mu-icon>
      </mu-button>
      <mu-button fab small color="primary" @click="flipXObject">
        <mu-icon value="flip"></mu-icon>
      </mu-button>
      <mu-button fab small color="primary" @click="frontObject">
        <mu-icon value="arrow_upward"></mu-icon>
      </mu-button>
      <mu-button fab small color="primary" @click="behindObject">
        <mu-icon value="arrow_downward"></mu-icon>
      </mu-button>
      <mu-button fab small color="error" @click="removeObject">
        <mu-icon value="delete_forever"></mu-icon>
      </mu-button>
    </div>

    <div style="margin-top: 8px;">
      <!--<mu-button v-if="selectedObj.type==='textbox'" fab small-->
      <!--:color="selectedObj.editable?'primary':'warning'" @click="lockTextEdit">-->
      <!--<mu-icon :value="selectedObj.editable?'lock':'lock_open'"></mu-icon>-->
      <!--</mu-button>-->

      <!--<mu-button fab small color="warning" @click="getCardObjects">-->
        <!--<mu-icon value="list"></mu-icon>-->
      <!--</mu-button>-->
    </div>
  </mu-container>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "ActionBar",
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'card',
        'selectedObj',
      ])
    },
    created() {

    },
    methods: {
      ...mapActions([
        'saveState',
      ]),
      // 90°旋转
      rotateObject() {
        this.selectedObj.rotate(this.selectedObj.angle === 360 ? 90 : this.selectedObj.angle + 90)
        this.card.renderAll()
        this.saveState()
      },
      // 水平翻转
      flipXObject() {
        this.selectedObj.set({
          scaleX: -this.selectedObj.scaleX,
        })
        this.card.renderAll()
        this.saveState()
      },
      // 上移一层
      frontObject() {
        this.selectedObj.bringForward()
        this.saveState()
      },
      // 下移一层
      behindObject() {
        this.selectedObj.sendBackwards()
        this.saveState()
      },
      // 移除Object
      removeObject() {
        if (!this.selectedObj) return
        console.log(this.selectedObj);
        this.card.remove(this.selectedObj)
        this.card.renderAll()
        this.$store.dispatch('setSelectedObj', null)
      },
      // 禁用/开启文字编辑
      lockTextEdit() {
        if (!this.selectedObj) return
        this.selectedObj.set({
          // isEditing: false,
          // selectable: true,
          // lockMovementX: false,
          // lockMovementY: false,
          editable: !this.selectedObj.editable
        })
        this.card.renderAll()
      },
      getCardObjects() {
        if (!this.selectedObj) return
        console.log(this.card.getObjects());
      }
    }
  }
</script>

<style lang="less" scoped>
  .button-wrapper {
    padding: 5px 8px;
    text-align: center;
  }
</style>
