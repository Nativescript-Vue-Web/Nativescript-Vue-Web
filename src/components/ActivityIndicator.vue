<template>
    <div v-show="busy" class="nvw-activity-indicator">
        <div class="nvw-activity-indicator__loader"></div>
    </div>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
.nvw-activity-indicator {
  &__loader {
    border: 5px solid #f3f3f3;
    border-radius: 50%;
    border-top: 5px solid #3498db;
    width: 40px;
    height: 40px;
    animation: nwv-spin 1s linear infinite;
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
