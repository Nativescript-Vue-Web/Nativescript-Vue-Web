<template>
    <div class="nvw-absolute-layout" :style="{width: convertPxStyle(width), height: convertPxStyle(height), backgroundColor: backgroundColor}">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'AbsoluteLayout',
  props: {
    width: {
      default: '100%',
    },
    height: {
      default: '100%',
    },
    backgroundColor: {},
  },
  methods: {
    convertPxStyle: function(value) {
      return value.toString().includes('%') ? value : value + 'px';
    },
  },
};
</script>

<style lang="scss" scoped>
.nvw-absolute-layout {
  background-color: burlywood;
  position: relative;
}

.nvw-absolute-layout > * {
  position: absolute;
}
</style>
