<template>
    <div>
        SegmentedBarItem
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'SegmentedBarItem',
  props: ['title'],
};
</script>
