<template>
  <input ref="button" type="button" @click="onClick" :value="text" />
</template>

<script>
export default {
  name: 'Button',
  props: ['tap', 'text'],
  methods: {
    onClick() {
      this.$emit('tap');
    },
  },
};
</script>

<style scoped lang="scss">
</style>
