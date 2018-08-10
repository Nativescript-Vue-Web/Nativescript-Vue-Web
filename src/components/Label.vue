<template>
  <div v-common-directive class="nvw-label" :style="{'white-space': textWrap ? 'normal' : 'nowrap'}">
    {{text}}
  </div>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';

export default {
  name: 'Label',
  props: {
    text: String,
    textWrap: Boolean,
  },
  directives: {
    'common-directive': CommonDirective,
  },
};
</script>

<style scoped lang='scss'>
.nvw-label {
}
</style>
