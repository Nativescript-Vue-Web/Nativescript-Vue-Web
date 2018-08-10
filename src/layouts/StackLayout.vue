<template>
    <div :class="{ 'nvw-stack-layout': true }" :style="{gridColumn: colNumber, gridRow: rowNumber}">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'StackLayout',
  props: ['tap', 'text', 'col', 'row'],
  computed: {
    colNumber: function() {
      try {
        return parseInt(this.col) + 1;
      } catch (e) {
        throw new Error('col attribute must be number');
      }
    },
    rowNumber: function() {
      try {
        return parseInt(this.row) + 1;
      } catch (e) {
        throw new Error('row attribute must be number');
      }
    },
  },
};
</script>

<style scoped lang="scss">
.nvw-stack-layout {
  display: flex;
  flex-direction: column;
}
</style>
