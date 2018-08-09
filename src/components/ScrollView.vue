<template>
    <div @scroll="onScroll($event)" :class="scrollViewClass" :style="{ width: widthStyle, height: heightStyle}">
        <slot></slot>
    </div>
</template>

<script>
import { debounce, camelCaseToDash, addPx } from '../helpers/helpers';

export default {
  name: 'ScrollView',
  props: {
    orientation: {
      type: String,
      default: 'horizontal',
      validator: value => ['horizontal', 'vertical'].indexOf(value) !== -1,
    },
    scrollBarIndicatorVisible: {
      type: Boolean,
      default: true,
    },
    width: [Number, String],
    height: [Number, String],
  },
  computed: {
    widthStyle: function() {
      return addPx(this.width);
    },
    heightStyle: function() {
      return addPx(this.height);
    },
    scrollViewClass: function() {
      return `nvw-scrollview nvw-scrollview${this.orientation !== 'none' ? '--' + camelCaseToDash(this.orientation) : ''}
      ${this.scrollBarIndicatorVisible ? '' : '--hide'}`;
    },
  },
  methods: {
    onScroll: debounce(function() {
      //TODO debounce will be fixed
      //this.$emit('scroll', event);
    }, 100),
  },
};
</script>

<style lang="scss" scoped>
.nvw-scrollview {
  &--horizontal {
    overflow: auto;
    white-space: nowrap;
  }
  &--vertical {
    overflow-y: scroll;
  }

  //TODO Web browsers not supported hidden scrollbar. If overflow set to hidden, scroll on disable. The solution will be found.
  &--horizontal,
  &--vertical {
    &--hide {
    }
  }
}
</style>
