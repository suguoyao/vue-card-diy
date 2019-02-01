<template>
  <mu-container class="button-wrapper" style="padding: 5px 8px;text-align: center;">
    <mu-button fab small color="error" @click="clearAll">
      <mu-icon value="delete_sweep"></mu-icon>
    </mu-button>
    <mu-button :disabled="undoList.length===0" fab small color="primary" @click="_undo">
      <mu-icon value="undo"></mu-icon>
    </mu-button>
    <mu-button :disabled="redoList.length===0" fab small color="primary" @click="_redo">
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
        'undoList',
        'redoList',
      ])
    },
    created() {

    },
    methods: {
      ...mapActions([
        'undo',
        'redo',
        'setPreviewImg'
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
      _undo() {
        this.undo()
      },
      _redo() {
        this.redo()
      },
      preview() {
        const card = this.card
        if (!card) return
        console.log(card.toDataURL({
            multiplier: 1,
            format: 'jpeg'
          })
        )

        const result = card.toDataURL({
          multiplier: 1,
          format: 'jpeg'
        })

        this.setPreviewImg(result)
        this.$router.push({
          path: 'preview'
        })
      }
    }
  }
</script>

<style scoped>

</style>
