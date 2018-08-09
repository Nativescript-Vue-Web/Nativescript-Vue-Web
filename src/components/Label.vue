<template>
  <div :style="{backgroundColor: backgroundColor, gridColumn: gridColumnStyle, gridRow: gridRowStyle}">
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'Label',
  props: [
    'text',
    'textWrap',
    'left',
    'top',
    'dock',
    'stretchLastChild',
    'width',
    'height',
    'order',
    'flexGrow',
    'flexShrink',
    'alignSelf',
    'flexWrapBefore',
    'row',
    'col',
    'rowSpan',
    'colSpan',
    'backgroundColor',
  ],
  data() {
    return {
      labelStyle: '',
      containerStyle: '',
    };
  },
  computed: {
    gridColumnStyle: function() {
      if (typeof this.colSpan !== 'undefined' && typeof this.col !== 'undefined') {
        if (parseInt(this.colSpan) !== 0 && parseInt(this.col) !== 0) {
          return parseInt(this.col) + 1 + ' / ' + (parseInt(this.col) + parseInt(this.colSpan) + 1);
        }
      }
    },
    gridRowStyle: function() {
      if (typeof this.rowSpan !== 'undefined' && typeof this.row !== 'undefined') {
        if (parseInt(this.rowSpan) !== 0 && parseInt(this.row) !== 0) {
          return parseInt(this.row) + 1 + ' / ' + (parseInt(this.row) + parseInt(this.rowSpan) + 1);
        }
      }
    },
  },
};
</script>

<style scoped lang='scss'>
</style>
