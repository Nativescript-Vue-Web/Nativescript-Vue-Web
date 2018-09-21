<template>
  <span v-common-directive
   class="nvw-label"
   :class="fontClass"
   :style="{'white-space': textWrap ? 'normal' : 'nowrap'}">
    {{textValue}}
  </span>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';

export default {
  name: 'Label',
  props: {
    text: {
      type: String,
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
      if (this.text.includes(' | fonticon')) {
        return this.text.replace(' | fonticon', '');
      }
    },
    textValue() {
      return this.text.includes(' | fonticon') ? '' : this.text;
    },
  },
};
</script>

<style scoped lang='scss'>
.nvw-label {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
