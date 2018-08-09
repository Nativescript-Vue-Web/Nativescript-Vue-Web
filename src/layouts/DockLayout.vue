<template>
    <div class="nvw-dock-layout">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'DockLayout',
  props: {
    stretchLastChild: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.nvw-dock-layout {
  width: 500px;
  height: 500px;
  background-color: crimson;
  display: inline-flex;
  flex-flow: column row;
}
</style>
