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
</style>
