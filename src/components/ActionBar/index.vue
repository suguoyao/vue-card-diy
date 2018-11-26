<template>
  <mu-container v-if="selectedObj" class="button-wrapper">
    <div>
      <mu-button fab small color="primary">
        <mu-icon value="rotate_90_degrees_ccw"></mu-icon>
      </mu-button>
      <mu-button fab small color="primary">
        <mu-icon value="flip"></mu-icon>
      </mu-button>
      <mu-button fab small color="primary">
        <mu-icon value="arrow_upward"></mu-icon>
      </mu-button>
      <mu-button fab small color="primary">
        <mu-icon value="arrow_downward"></mu-icon>
      </mu-button>
      <mu-button fab small color="error" @click="removeObject">
        <mu-icon value="delete_forever"></mu-icon>
      </mu-button>
    </div>

    <div style="margin-top: 8px;">
      <mu-button fab small color="warning" @click="getCardObjects">
        <mu-icon value="list"></mu-icon>
      </mu-button>
    </div>
  </mu-container>
</template>

<script>
  import {mapGetters} from 'vuex'

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
      removeObject() {
        if (!this.selectedObj) return
        console.log(this.selectedObj);
        this.card.remove(this.selectedObj)
        this.card.renderAll()
        this.$store.dispatch('setSelectedObj', null)
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
