<template>
  <span
    v-common-directive
    class="nvw-label"
    :class="fontClass"
    :style="{'white-space': textWrap ? 'normal' : 'nowrap'}"
  >
    {{textValue}}
    <slot/>
  </span>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'Label',
  props: {
    text: {
      type: [String, Number],
      default: '',
    },
    textWrap: {
      type: Boolean,
      default: false,
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
  computed: {
    fontClass() {
      if (typeof this.text === 'string' && this.text.includes(' | fonticon')) {
        return this.text.replace(' | fonticon', '');
      }
    },
    textValue() {
      return typeof this.text === 'string' && this.text.includes(' | fonticon') ? '' : this.text;
    },
  },
  mixins: [Gestures],
};
</script>

<style lang='scss'>
.nvw-label {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
