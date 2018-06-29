<template>
  <label v-show="busy">
    Loading label or a spinner gif...
  </label>
</template>

<script>
export default {
    name: "ActivityIndicator",
    props: [
        "busy",
        "onBusyChange", // an event.
    ],
};
</script>

<style lang="scss" scoped>

</style>
