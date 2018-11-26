<template>
  <mu-container class="button-wrapper" style="padding: 5px 8px;text-align: center;">
    <mu-button fab small color="error" @click="clearAll">
      <mu-icon value="delete_sweep"></mu-icon>
    </mu-button>
    <mu-button fab small color="primary">
      <mu-icon value="undo"></mu-icon>
    </mu-button>
    <mu-button fab small color="primary">
      <mu-icon value="redo"></mu-icon>
    </mu-button>
    <mu-button fab small color="success" @click="preview">
      <mu-icon value="remove_red_eye"></mu-icon>
    </mu-button>
  </mu-container>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "TopHeader",
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['card'])
    },
    created() {

    },
    methods: {
      clearAll() {
        const card = this.card
        if (!card) return
        // card.clear()
        // canvas.getObjects().slice().forEach( .... );
      },
      preview() {
        const card = this.card
        if (!card) return
        // console.log(card.toDataURL());
      }
    }
  }
</script>

<style scoped>

</style>
