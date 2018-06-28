<template>
    <div
    :class="orientation == 'horizontal' ? 'horizontalScroll' : 'verticalScroll'" >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    </div>
</template>

<script>
export default {
  name: 'ScrollView',
  props: [
    'orientation',
    'scrollBarIndicatorVisible', // was not included due to the incompatible code between different browsers for now.
  ],
};
</script>

<style lang="scss" scoped>
    .horizontalScroll {
        height: 10%;
        width: 10%;
        overflow: auto;
        white-space: nowrap;
    }
    .verticalScroll {
        width: 110px;
        height: 110px;
        overflow-y: scroll;
    }
</style>

