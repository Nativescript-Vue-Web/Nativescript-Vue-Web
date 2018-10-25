<template>
    <span :text="title"></span>
</template>

<script>
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'SegmentedBarItem',
  data() {
    return {
      title: {
        type: String,
        default: '',
      },
    };
  },
  mixins: [Gestures],
};
</script>
