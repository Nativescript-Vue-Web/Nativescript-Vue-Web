<template>
    <Button :text="title" @tap="onButtonTap" />
</template>

<script>
import Gestures from '../mixins/GestureMixin';

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
  mixins: [Gestures],
};
</script>

<style lang="scss">
</style>
