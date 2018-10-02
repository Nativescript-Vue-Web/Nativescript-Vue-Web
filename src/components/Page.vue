<template>
  <div :class="{ 'page': true }">
    <slot></slot>
  </div>
</template>

<script>
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'Page',
  mixins: [Gestures],
};
</script>
