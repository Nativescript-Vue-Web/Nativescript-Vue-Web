<template>
    <iframe 
        :src="src" 
        @load="loadFinished ? loadFinished($event) : null"
    />
</template>

<script>
export default {
    name: 'WebView',
    // Event called @loadstart does not get fired in the iframe so, the below method is a temporarily workaround to the problem.
    created () {
      if (this.loadStarted && navigator.onLine) {
        this.loadStarted();
      } 
    },
    props: [
        'src',
        'loadStarted',
        'loadFinished',
    ],
};
</script>

<style lang="scss" scoped>

</style>

