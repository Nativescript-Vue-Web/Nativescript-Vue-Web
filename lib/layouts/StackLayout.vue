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
        colNumber: function () {
            return parseInt(this.col)+1;
        },
        rowNumber: function () {
            return parseInt(this.row)+1;
        }
    }
};
</script>

<style scoped lang="scss">
  .nvw-stack-layout {
    display: flex;
    flex-direction: column;
  }

</style>
