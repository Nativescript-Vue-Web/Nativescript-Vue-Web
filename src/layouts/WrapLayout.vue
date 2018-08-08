<template>
    <div :style="style" class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'WrapLayout',
  props: [
    'orientation',
    'itemWidth', // These props called itemWidth and itemHeight have to be reviewed in the meeting.
    'itemHeight',
  ],
  data() {
    return {
      style: '',
    };
  },
  mounted() {
    this.style = `flex-direction: ${this.orientation == 'horizontal' ? 'row' : 'column'};`;
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 50%;
  height: 500px;
  background-color: crimson;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
