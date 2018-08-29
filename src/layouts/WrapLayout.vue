<template>
    <div v-common-directive class="nvw-wrap-layout" :style="{flexDirection: orientation === 'vertical' ? 'column' : 'row'}">
        <slot></slot>
    </div>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';

export default {
  name: 'WrapLayout',
  props: {
    orientation: {
      type: String,
      default: 'horizontal',
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
};
</script>

<style lang="scss" scoped>
.nvw-wrap-layout {
  background-color: crimson;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
