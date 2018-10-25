<template>
    <button v-common-directive
    class="nvw-button" :type="type"
    :style="{'white-space': textWrap ? 'normal' : 'nowrap'}">
     {{text}}
    </button>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'Button',
  props: {
    text: String,
    textWrap: {
      Type: Boolean,
      default: false,
    },
    type: {
      Type: String,
      default: 'button',
      validator: val => ['button', 'reset', 'submit'].includes(val),
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.nvw-button {
  min-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
