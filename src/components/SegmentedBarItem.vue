<template>
    <Button :class="barItemClass" :text="title" @tap="$parent.chooseTab($event, currentTab)" />
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'SegmentedBarItem',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  computed: {
    currentTab: function() {
      const { $parent } = this;
      const { $slots } = $parent;
      const indexOfBarItem = $slots.default.findIndex(obj => obj.componentOptions.propsData.title === this.title);
      return indexOfBarItem;
    },
    barItemClass: function() {
      return `${this.currentTab === this.$parent.selectedIndex ? 'nvw-segmented-bar-item--show' : 'nvw-segmented-bar-item--hide'}`;
    },
  },
  components: {
    Button,
  },
};
</script>

<style lang="scss">
.nvw-segmented-bar-item {
  &--show {
    text-decoration: underline;
    color: black;
  }
  &--hide {
    color: gray;
  }
}
</style>
