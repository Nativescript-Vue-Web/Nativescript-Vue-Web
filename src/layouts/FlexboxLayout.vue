<template>
    <div
        v-common-directive
        class="nvw-flexbox-layout"
        :style="{
         flexDirection: flexDirection,
         flexWrap: flexWrap,
         justifyContent: justifyContent,
         alignItems: alignItems,
         alignContent: alignContent,
        }">
        <slot></slot>
    </div>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'FlexboxLayout',
  props: {
    flexDirection: String,
    flexWrap: String,
    justifyContent: String,
    alignItems: String,
    alignContent: String,
  },
  directives: {
    'common-directive': CommonDirective,
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.nvw-flexbox-layout {
  display: flex;
}
</style>
