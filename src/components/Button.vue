<template>
    <button v-common-directive
    class="nvw-button"  
    @click="tap ? tap($event) : null" >
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
      type: Boolean,
      default: false,
    },
    tap: Function,
  },
  directives: {
    'common-directive': CommonDirective,
  },
};
</script>

<style scoped lang="scss">
</style>
