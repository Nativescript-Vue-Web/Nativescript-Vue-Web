<template>
    <div @scroll="onScroll($event)" :class="scrollViewClass" :style="{ width: widthStyle, height: heightStyle}">
        <slot></slot>
    </div>
</template>

<script>
import { debounce } from '../helpers/lodash.debounce';

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
      return this.width + 'px';
    },
    heightStyle: function() {
      return this.height + 'px';
    },
    scrollViewClass: function() {
      return {
        'nvw-scrollview nvw-scrollview--horizontal': this.orientation === 'horizontal' ? true : false,
        'nvw-scrollview nvw-scrollview--vertical': this.orientation === 'vertical' ? true : false,
        'nvw-scrollview nvw-scrollview--horizontal--hide': this.orientation === 'horizontal' && !this.scrollBarIndicatorVisible ? true : false,
        'nvw-scrollview nvw-scrollview--vertical--hide': this.orientation === 'vertical' && !this.scrollBarIndicatorVisible ? true : false,
      };
    },
  },
  methods: {
    onScroll: debounce(function() {
      this.$emit('scroll', event);
    }, 100),
  },
};
</script>

<style lang="scss" scoped>
.nvw-scrollview--horizontal {
  overflow: auto;
  white-space: nowrap;
}
.nvw-scrollview--vertical {
  overflow-y: scroll;
}

//TODO Web browsers not supported hidden scrollbar. If overflow set to hidden, scroll on disable. The solution will be found.
.nvw-scrollview__vertical-scroll--hide,
.verticalScroll.hideScroll--hide {
}
</style>
