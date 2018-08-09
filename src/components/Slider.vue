<template>
    <div class="nvw-slider">
        <input
            ref="slider"
            class="nvw-slider__scroll"
            type="range"
            :min="minValue"
            :max="maxValue"
            :value="value"
            @change="valueChange ? valueChange($event, value) : null"
        />
    </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    minValue: Number,
    maxValue: Number,
    value: Number,
    valueChange: Function,
  },
};
</script>

<style lang="scss" scoped>
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
