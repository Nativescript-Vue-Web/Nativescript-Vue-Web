<template>
    <button v-common-directive
    class="nvw-button"
    @click="$emit('tap',$event)"
    :style="{'white-space': textWrap ? 'normal' : 'nowrap'}">
     {{text}}
    </button>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';

export default {
  name: 'Button',
  props: {
    text: String,
    textWrap: {
      Type: Boolean,
      default: false,
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
};
</script>

<style lang="scss">
.nvw-button {
  min-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
