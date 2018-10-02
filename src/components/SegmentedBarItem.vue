<template>
    <Button class="nvw-segmentedBarItem" :text="title" @tap="onButtonTap" />
</template>

<script>
export default {
  name: 'SegmentedBarItem',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    onButtonTap: function() {
      this.$emit('tap', this.title);
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
}
.active {
  background-color: #1a8cff;
  color: white;
}
.inactive {
  background-color: transparent;
}
</style>
