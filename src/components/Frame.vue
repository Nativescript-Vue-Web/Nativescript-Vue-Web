<template>
  <div class="nvw-frame">
    <slot></slot>
  </div>
</template>

<script>
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'Frame',
  mixins: [Gestures],
};
</script>
