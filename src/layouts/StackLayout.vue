<template>
    <div v-common-directive :class="stackLayoutClass">
        <slot></slot>
    </div>
</template>

<script>
import { camelCaseToDash } from '../helpers/helpers';
import CommonDirective from '../directives/CommonDirective';

export default {
  name: 'StackLayout',
  props: {
    orientation: {
      type: String,
      default: 'vertical',
      validator: value => ['horizontal', 'vertical'].indexOf(value) !== -1,
    },
  },
  computed: {
    stackLayoutClass: function() {
      return `nvw-stack-layout nvw-stack-layout${
        this.orientation === 'horizontal' || this.orientation === 'vertical' ? '--' + camelCaseToDash(this.orientation) : ''
      }`;
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
};
</script>

<style scoped lang="scss">
.nvw-stack-layout {
  display: flex;
  flex-direction: column;

  &--horizontal {
    flex-direction: row;
  }

  > {
    [verticalAlignment='top'] {
      align-self: flex-start;
    }
    [verticalAlignment='center'] {
      align-self: center;
    }
    [verticalAlignment='bottom'] {
      align-self: flex-end;
    }
    [verticalAlignment='stretch'] {
      align-self: stretch;
    }

    [horizontalAlignment='left'] {
      align-self: flex-start;
    }
    [horizontalAlignment='center'] {
      align-self: center;
    }
    [horizontalAlignment='right'] {
      align-self: flex-end;
    }
    [horizontalAlignment='stretch'] {
      align-self: stretch;
    }
  }
}
</style>
