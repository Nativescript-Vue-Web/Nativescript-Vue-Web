<template>
    <span :text="title"></span>
</template>

<script>
export default {
  name: 'SegmentedBarItem',
  props: {
    title: {
      type: String,
      default: '',
    },
    webIcon: String,
  },
};
</script>
