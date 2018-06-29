<template>
  <div :class="{ 'page': true }">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: "Page",
};
</script>

<style scoped lang="scss">
</style>
