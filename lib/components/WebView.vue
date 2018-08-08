<template>
    <iframe 
        :src="src" 
        @load="onLoadFinished($event)"
    />
</template>

<script>
export default {
  name: 'WebView',
  // Event called @loadstart does not get fired in the iframe so, the below method is a temporarily workaround to the problem.
  created() {
    if (this.loadStarted && navigator.onLine) {
      this.$emit('loadStarted');
    }
  },
  props: ['src', 'loadStarted', 'loadFinished'],
  methods: {
    onLoadFinished: function(event) {
      this.$emit('loadFinished', event);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
