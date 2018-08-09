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
    // itemWidth and itemHeight will be set using directives for now.
    itemWidth: Number,
    itemHeight: Number,
  },
};
</script>

<style lang="scss" scoped>
.nvw-wrap-layout {
  width: 50%;
  height: 500px;
  background-color: crimson;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
