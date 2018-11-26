<template>
  <div class="nvw-progress">
    <div class="nvw-progress__bar" :style="{width: this.progressValuePercentage}"></div>
  </div>
</template>

<script>
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'Progress',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    maxValue: {
      type: Number,
      default: 100,
    },
  },
  computed: {
    progressValue: function() {
      return this.value <= this.maxValue ? Math.floor((this.value / this.maxValue) * 100) : 100;
    },
    progressValuePercentage: function() {
      return this.progressValue + '%';
    },
  },
  watch: {
    value: function(newValue, oldValue) {
      this.$emit('valueChange', {
        value: newValue,
        oldValue,
        eventName: 'valueChange',
      });
    },
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.nvw-progress {
  width: 100%;
  background-color: #ddd;

  &__bar {
    width: 0;
    height: 20px;
    background-color: #9198e5;
    transition: all 1s ease;
    transition-delay: 0.1s;
    color: brown;
  }
}
</style>
