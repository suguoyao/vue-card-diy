<template>
  <div class="footer">
    <scroll-list v-if="tabType===2" type="template"></scroll-list>
    <scroll-list v-if="tabType===3" type="decorate"></scroll-list>
    <scroll-list v-if="tabType===4" type="text"></scroll-list>
    <scroll-list v-if="tabType===5" type="layer"></scroll-list>

    <mu-container class="tabs">
      <mu-bottom-nav :value.sync="tabType" @change="tabItemClick">
        <mu-bottom-nav-item title="图片" :value="1" icon="add_a_photo">
          <!--<input type="file" accept="image/png,image/jpg,image/jpeg">-->
        </mu-bottom-nav-item>
        <mu-bottom-nav-item title="模板" :value="2" icon="panorama"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="装饰" :value="3" icon="favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="文字" :value="4" icon="text_fields"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="图层" :value="5" icon="filter"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
  import ScrollList from '@/components/ScrollList'

  export default {
    name: "Tabs",
    components: {
      ScrollList,
    },
    data() {
      return {
        tabType: '',
      }
    },
    computed: {},
    created() {
      document.addEventListener('touchend', this._closeListHandle)
    },
    beforeDestroy() {
      document.removeEventListener('touchend', this._closeListHandle)
    },
    methods: {
      _closeListHandle(e) {
        e.stopPropagation()
        if (!this.$el.contains(e.target)) {
          this.tabType = ''
        }
      },
      tabItemClick(type) {
        this.tabType = type
      }
    }
  }
</script>

<style lang="less" scoped>
  .footer {
    overflow: hidden;
  }

  .tabs {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 0;
    overflow: hidden;

    .mu-bottom-item {
      min-width: auto !important;
    }
  }
</style>
