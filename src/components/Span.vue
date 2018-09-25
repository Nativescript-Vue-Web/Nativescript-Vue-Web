<template>
    <span v-common-directive class="nvw-span">
        {{text}}
        <slot />
    </span>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';

export default {
  name: 'Span',
  props: {
    text: String,
  },
  directives: {
    'common-directive': CommonDirective,
  },
};
</script>
