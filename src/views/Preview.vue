<template>
  <div class="app-container preview">
    <img v-if="previewImg" :src="previewImg" alt="">
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "Preview",
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'previewImg'
      ])
    },
    created() {
      if (!this.previewImg) {
        this.$router.push('/')
      }
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  .preview {
    img {
      display: block;
      margin: 20px auto 0 auto;
    }
  }
</style>
