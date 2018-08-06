<template>
  <div :class="{ 'stack-layout': true }">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'StackLayout',
    props: ['tap', 'text'],
};
</script>

<style scoped lang="scss">
  .stack-layout {
    display: flex;
    flex-direction: column;
  }
</style>
