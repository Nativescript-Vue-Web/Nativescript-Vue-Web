<template>
    <div v-common-directive class="nvw-absolute-layout">
        <slot></slot>
    </div>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'AbsoluteLayout',
  directives: {
    'common-directive': CommonDirective,
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.nvw-absolute-layout {
  position: relative;
  width: 100%;
  height: 100%;
}

.nvw-absolute-layout > * {
  position: absolute !important;
}
</style>
