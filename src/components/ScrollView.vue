<template>
    <div v-common-directive @scroll="onScroll($event)" :class="scrollViewClass">
        <slot></slot>
    </div>
</template>

<script>
import { debounce, camelCaseToDash } from '../helpers/helpers';
import CommonDirective from '../directives/CommonDirective';

export default {
  name: 'ScrollView',
  props: {
    orientation: {
      type: String,
      default: 'vertical',
      validator: value => ['horizontal', 'vertical'].indexOf(value) !== -1,
    },
    scrollBarIndicatorVisible: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    scrollViewClass: function() {
      return `nvw-scrollview nvw-scrollview${this.orientation !== 'none' ? '--' + camelCaseToDash(this.orientation) : ''}${
        this.scrollBarIndicatorVisible ? '' : '--hide'
      }`;
    },
  },
  methods: {
    onScroll: debounce(function(event) {
      this.$emit('scroll', event);
    }, 100),
  },
  directives: {
    'common-directive': CommonDirective,
  },
};
</script>

<style lang="scss">
.nvw-scrollview {
  &--horizontal {
    overflow-x: auto;
    overflow-y: hidden;

    // Child elements width must be same as parent width.
    * {
      white-space: nowrap !important;
    }
  }

  &--vertical {
    overflow-x: hidden;
    overflow-y: auto;
  }

  //TODO Web browsers not supported hidden scrollbar. If overflow set to hidden, scrolling will disable.
  &--horizontal,
  &--vertical {
    &--hide {
    }
  }
}
</style>
