<template>
    <div class="nvw-slider">
        <input
            class="nvw-slider__scroll"
            type="range"
            :min="minValue"
            :max="maxValue"
            :value="value"
            @change="$emit('valueChange', $event)"
            @input="updateValue"
        />
    </div>
</template>

<script>
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'Slider',
  props: {
    value: {
      type: [String, Number],
      default: 0,
    },
    minValue: {
      type: [String, Number],
      default: 0,
    },
    maxValue: {
      type: [String, Number],
      default: 100,
    },
  },
  methods: {
    updateValue: function(event) {
      // Since the value returned from DOM input element is in the type of String,
      // we convert it to the integer so that we avoid the warning of mismatching of the prop type.
      this.$emit('input', parseInt(event.target.value));
    },
  },
  mixins: [Gestures],
};
</script>

<style lang="scss" >
.nvw-slider {
  width: 100%;
  &__scroll {
    -webkit-appearance: none;
    width: 100%;
    height: 25px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;

    &:hover {
      opacity: 2;
    }
    &::-webkit-slider-thumb {
      width: 25px;
      height: 25px;
      background: #4caf50;
      cursor: pointer;
      -webkit-appearance: none;
    }
    &::-moz-range-thumb {
      width: 25px;
      height: 25px;
      background: #4caf50;
      cursor: pointer;
      -webkit-appearance: none;
    }
  }
}
</style>
