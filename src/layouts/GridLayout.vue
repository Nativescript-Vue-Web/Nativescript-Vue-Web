<template>
    <div v-common-directive :style="{gridTemplateColumns: formattedColumns, gridTemplateRows: formattedRows}" class="nvw-grid-layout">
        <slot></slot>
    </div>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'GridLayout',
  props: {
    columns: {
      type: String,
      default: '',
    },
    rows: {
      type: String,
      default: '',
    },
  },
  computed: {
    formattedColumns: function() {
      let formattedColumns = [];

      this.columns.split(',').forEach(function(element) {
        if (element.trim().includes('*')) {
          const factor = element.trim().replace('*', '') === '' ? '1' : parseInt(element.trim().replace('*', ''));
          formattedColumns.push(factor + 'fr');
        } else if (element.trim() === 'auto') {
          formattedColumns.push('min-content');
        } else {
          formattedColumns.push(parseInt(element.trim()) + 'px');
        }
      });

      return formattedColumns.join(' ');
    },
    formattedRows: function() {
      let formattedRows = [];

      this.rows.split(',').forEach(function(element) {
        if (element.trim().includes('*')) {
          const factor = element.trim().replace('*', '') === '' ? '1' : parseInt(element.trim().replace('*', ''));
          formattedRows.push(factor + 'fr');
        } else if (element.trim() === 'auto') {
          formattedRows.push('min-content');
        } else {
          formattedRows.push(parseInt(element.trim()) + 'px');
        }
      });

      return formattedRows.join(' ');
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.nvw-grid-layout {
  display: grid;
}
</style>
