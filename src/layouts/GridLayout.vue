<template>
    <div :style="style" class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'GridLayout',
  props: ['columns', 'rows'],
  data() {
    return {
      style: '',
    };
  },
  mounted() {
    // The syntax of the props called columns and rows used in the mobile does not match the css syntax used in the web.
    // Therefore, editing columns cannot be used for now.
    this.style = `grid-template-columns: ${this.columns}; grid-template-rows: ${this.rows};`;
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 50%;
  height: 500px;
  background-color: crimson;
  display: grid;
}
</style>
