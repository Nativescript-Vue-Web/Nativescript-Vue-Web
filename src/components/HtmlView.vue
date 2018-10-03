<template>
    <span v-html="html" />
</template>

<script>
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'HtmlView',
  props: {
    html: String,
  },
  mixins: [Gestures],
};
</script>
