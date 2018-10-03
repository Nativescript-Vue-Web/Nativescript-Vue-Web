<template>
    <div>
        SegmentedBarItem
        <slot></slot>
    </div>
</template>

<script>
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'SegmentedBarItem',
  props: ['title'],
  mixins: [Gestures],
};
</script>
