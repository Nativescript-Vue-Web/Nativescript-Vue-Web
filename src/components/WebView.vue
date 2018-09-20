<template>
  <iframe v-if="isURL"
        class="nvw-webview"
        :src="src" 
        @load="$emit('loadFinished', $event)"
    />
    <div v-else v-html="src"></div>
</template>

<script>
export default {
  name: 'WebView',
  props: {
    src: String,
  },
  // Event called @loadstart does not get fired in the iframe so, the below method is a temporarily workaround to the problem.
  created(event) {
    if (this.loadStarted && navigator.onLine) {
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
};
</script>

<style lang="scss" scoped>
.nvw-webview {
  display: flex;
}
</style>
