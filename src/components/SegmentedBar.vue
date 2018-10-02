<template>
  <div class="nvw-segmentedBar" ref="segmentedbar">
      <div class="nvw-segmentedBar__items" v-if="items.length > 0" v-for="(item,index) in items" :key="item" :index="index">
         <SegmentedBarItem :class="{'active' : selectedIndex === index }" :title="item"/>
      </div>
    <div class="nvw-segmentedBar__items" v-if="items.length === 0">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SegmentedBar',
  model: {
    event: 'selectedIndexChange',
    prop: 'selectedIndex',
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    selectedIndex: {
      type: Number,
      default: 0,
    },
    selectedBackgroundColor: String,
  },
  methods: {
    updateSegmentedBarItemIndexes() {
      if (this.items.length) {
        return;
      }
      if (this.$slots.default && this.$slots.default.length) {
        for (let i = 0, length = this.$slots.default.length; i < length; i++) {
          const item = this.$slots.default[i];
          if (item.componentOptions.tag === 'SegmentedBarItem') {
            item.componentOptions.propsData.index = i;
            this.$set(this.$slots.default, i, item);
          }
        }
      }
    },
  },
  created() {
    this.updateSegmentedBarItemIndexes();
    this.$on('segmentedBarItemSelected', selectedIndex => {
      this.$emit('selectedIndexChange', selectedIndex);
    });
  },
  updated() {
    this.updateSegmentedBarItemIndexes();
  },
};
</script>

<style lang="scss">
.nvw-segmentedBar {
  &__items {
    display: inline-block;
  }
}
</style>
