<template>
  <mu-container class="button-wrapper" style="padding: 5px 8px;text-align: center;">
    <mu-button fab small color="error" @click="clearAll">
      <mu-icon value="delete_sweep"></mu-icon>
    </mu-button>
    <mu-button :disabled="undoList.length===0" fab small color="primary" @click="undo">
      <mu-icon value="undo"></mu-icon>
    </mu-button>
    <mu-button :disabled="redoList.length===0" fab small color="primary" @click="redo">
      <mu-icon value="redo"></mu-icon>
    </mu-button>
    <mu-button fab small color="success" @click="preview">
      <mu-icon value="remove_red_eye"></mu-icon>
    </mu-button>
  </mu-container>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "TopHeader",
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'card',
        'canvasState',
        'undoList',
        'redoList',
      ])
    },
    created() {

    },
    methods: {
      ...mapActions([
        'setCanvasState',
        'addUndo',
        'popUndo',
        'addRedo',
        'popRedo',
      ]),
      clearAll() {
        const card = this.card
        if (!card) return
        // card.clear()
        card.set({
          backgroundColor: '#fff'
        })
        card.getObjects().slice().forEach(obj => {
          card.remove(obj)
        });
      },
      undo() {
        const card = this.card
        if (!card) return

        this.addRedo(this.canvasState)
        const lastState = {...this.undoList[this.undoList.length - 1]}
        this.setCanvasState(lastState)
        this.popUndo()
        card.loadFromJSON(lastState, () => {
          card.renderAll();
        })
      },
      redo() {
        const card = this.card
        if (!card) return

        this.addUndo(this.canvasState)
        const lastState = {...this.redoList[this.redoList.length - 1]}
        this.setCanvasState(lastState)
        this.popRedo()
        card.loadFromJSON(lastState, () => {
          card.renderAll();
        })
      },
      preview() {
        const card = this.card
        if (!card) return
        console.log(card.toJSON());
      }
    }
  }
</script>

<style scoped>

</style>
