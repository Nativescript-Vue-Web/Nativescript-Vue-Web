<template>
  <iframe v-if="isURL"
        class="nvw-webview"
        :src="srcValue"
        @load="$emit('loadFinished', $event)"
    />
    <div v-else v-html="src"></div>
</template>

<script>
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'WebView',
  props: {
    src: String,
  },
  // Event called @loadstart does not get fired in the iframe so, the below method is a temporarily workaround to the problem.
  created(event) {
    if (navigator.onLine) {
      this.$emit('loadStarted', event);
    }
  },
  computed: {
    isURL: function() {
      return this.src.startsWith('http://') || this.src.startsWith('https://') || this.src.startsWith('~');
    },
    srcValue: function() {
      return this.src.startsWith('~') ? this.src.replace('~', '') : this.src;
    },
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.nvw-webview {
  display: flex;
}
</style>
