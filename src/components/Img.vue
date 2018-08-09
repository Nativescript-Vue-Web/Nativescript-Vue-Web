<template>
  <img :src="imageSrc" :class="stretchClass" :width="width" :height="height" />
</template>

<script>
import { camelCaseToDash } from '../helpers/helpers';

export default {
  name: 'Img',
  props: {
    src: String,
    stretch: {
      type: String,
      default: 'none',
    },
    width: [String, Number],
    height: [String, Number],
  },
  data() {
    return {
      imageSrc: `${this.src.replace('~', '')}`,
    };
  },
  computed: {
    stretchClass: function() {
      return `nvw-img nvw-img${this.stretch !== 'none' ? '--' + camelCaseToDash(this.stretch) : ''}`;
    },
  },
};
</script>

<style scoped lang="scss">
//TODO css will rebuild
.nvw-img {
  &--fill {
    width: inherit;
    height: inherit;
  }

  &--aspect-fill {
    width: inherit;
  }
}
</style>
