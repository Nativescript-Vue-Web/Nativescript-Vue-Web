<template>
    <div v-show="busy" class="nvw-activity-indicator">
        <div class="nvw-activity-indicator__loader"></div>
    </div>
</template>

<script>
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'ActivityIndicator',
  props: {
    busy: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    busy: function() {
      this.$emit('busyChange');
    },
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.nvw-activity-indicator {
  width: 40px;
  height: 40px;
  &__loader {
    border: 4px solid #f3f3f3;
    border-radius: 50%;
    border-top: 4px solid #3498db;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    animation: nwv-spin 0.7s linear infinite;
  }
}

@keyframes nwv-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
