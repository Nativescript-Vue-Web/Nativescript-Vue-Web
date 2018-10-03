<template>
    <div class="nvw-dock-layout">
        <slot></slot>
    </div>
</template>

<script>
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'DockLayout',
  props: {
    stretchLastChild: Boolean,
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.nvw-dock-layout {
  width: 500px;
  height: 500px;
  background-color: crimson;
  display: inline-flex;
  flex-flow: column row;
}
</style>
