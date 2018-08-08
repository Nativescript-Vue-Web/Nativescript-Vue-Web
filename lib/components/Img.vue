<template>
  <img :src="imageSrc"/>
</template>

<script>
export default {
  name: 'Img',
  props: ['src'],
  data() {
    return {
      imageSrc: `${this.src.replace('~', '')}`,
    };
  },
};
</script>

<style scoped lang="scss">
</style>
