<template>
    <div class="nvw-slider">
        <input
            ref="slider"
            class="nvw-slider__scroll"
            type="range"
            :min="minValue"
            :max="maxValue"
            :value="sliderVal"
            @change="onValueChange($event)"
        />
    </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    minValue: Number,
    maxValue: Number,
    sliderVal: Number,
  },
  methods: {
    onValueChange: function(event) {
      this.$emit('valueChange', event);
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin transition {
  width: 25px;
  height: 25px;
  background: #4caf50;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
}
.nvw-slider {
  width: 100%;
}
.nvw-slider__scroll {
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
}
.nvw-slider__scroll::-webkit-slider-thumb {
  @include transition;
}
.nvw-slider__scroll::-moz-range-thumb {
  @include transition;
}
</style>
