<template>
  <Image :src="src"/>
</template>

<script>
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'Img',
  props: ['src'],
  mixins: [Gestures],
};
</script>
