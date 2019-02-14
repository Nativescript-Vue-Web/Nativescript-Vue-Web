<template>
  <img @error="$emit('onLoadError', $event)" v-common-directive :src="imageSrc" :class="stretchClass" :width="width" :height="height" />
</template>

<script>
import { camelCaseToDash } from '../helpers/helpers';
import CommonDirective from '../directives/CommonDirective';
import Gestures from '../mixins/GestureMixin';

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
  computed: {
    imageSrc: function() {
      return this.src.replace('~', '');
    },
    stretchClass: function() {
      return `nvw-img ${this.stretch !== 'none' ? 'nvw-img--' + camelCaseToDash(this.stretch) : ''}`.trim();
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.nvw-img {
  align-self: flex-start;

  &--fill {
    width: 100%;
    height: 100%;
    align-self: stretch;
  }

  &--aspect-fill {
    object-fit: cover;
    align-self: stretch;
    width: 100%;
    height: 100%;
  }

  &--aspect-fit {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: top;
  }
}
</style>
