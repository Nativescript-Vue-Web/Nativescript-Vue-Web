<template>
    <div class="nvw-progress">
        <div class="nvw-progress__bar" :style="{width: this.progressValuePercentage}"></div>
    </div>
</template>

<script>
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
    value: function() {
      this.$emit('valueChange', this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.nvw-progress {
  width: 100%;
  background-color: #ddd;
}

.nvw-progress__bar {
  width: 0;
  height: 20px;
  background: linear-gradient(#e66465, #9198e5);
  transition: all 1s ease;
  transition-delay: 1s;
  color: brown;
}
</style>
