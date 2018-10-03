<template>
    <span :text="title"></span>
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
    webIcon: String,
  },
  mixins: [Gestures],
};
</script>
