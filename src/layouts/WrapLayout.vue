<template>
    <div v-common-directive class="nvw-wrap-layout" :style="{flexDirection: orientation === 'vertical' ? 'column' : 'row'}">
        <slot></slot>
    </div>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';
import Gestures from '../mixins/GestureMixin';

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
  mixins: [Gestures],
};
</script>

<style lang="scss">
.nvw-wrap-layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
