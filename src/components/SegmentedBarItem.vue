<template>
    <Button class="nvw-segmentedBarItem" :text="title" @tap="onSelected($event)" />
</template>

<script>
export default {
  name: 'SegmentedBarItem',
  props: {
    title: {
      type: String,
      default: '',
    },
    index: Number,
  },
  methods: {
    onSelected($event) {
      $event.stopPropagation();
      $event.preventDefault();
      this.$parent.$emit('segmentedBarItemSelected', this.index);
    },
  },
};
</script>

<style lang="scss">
.nvw-segmentedBarItem {
  text-transform: uppercase;
  border-radius: 4px;
  padding: 3px 40px;
  cursor: pointer;
  border: 1px solid #1a8cff;
  text-decoration: none;
  font-size: 14px;
  line-height: 120%;
  background-color: transparent;
}
.active {
  background-color: #1a8cff;
  color: white;
}
</style>
