<template>
    <div class="nvw-wrap-layout" :style="{flexDirection: orientation == 'horizontal' ? 'row' : 'column'}">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'WrapLayout',
  props: {
    orientation: String,
  },
};
</script>

<style lang="scss" scoped>
.nvw-wrap-layout {
  height: 500px;
  background-color: crimson;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
