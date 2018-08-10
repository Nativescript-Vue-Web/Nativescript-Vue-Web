<template>
    <div
        v-common-directive
        class="nvw-flexbox-layout"
        :style="{
         flexDirection: flexDirection,
         flexWrap: flexWrap,
         justifyContent: justifyContent,
         alignItems: alignItems,
         alignContent: alignContent,
        }">
        <slot></slot>
    </div>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';

export default {
  name: 'FlexboxLayout',
  props: {
    flexDirection: String,
    flexWrap: String,
    justifyContent: String,
    alignItems: String,
    alignContent: String,
  },
  directives: {
    'common-directive': CommonDirective,
  },
};
</script>

<style lang="scss" scoped>
.nvw-flexbox-layout {
  width: 50%;
  height: 500px;
  background-color: crimson;
  display: flex;
}

.nvw-flexbox-layout > {
  // Deafult stretch.
  [alignSelf=''] or [alignSelf='stretch'] {
    align-self: stretch;
  }

  [alignSelf='flex-start'] {
    align-self: flex-start;
  }

  [alignSelf='flex-end'] {
    align-self: flex-end;
  }

  [alignSelf='center'] {
    align-self: center;
  }

  [alignSelf='baseline'] {
    align-self: baseline;
  }

  // Default value.
  [flexWrapBefore=''] {
    flex-wrap: nowrap;
  }

  [flexWrapBefore='true'] {
    flex-wrap: wrap;
  }

  [flexWrapBefore='false'] {
    flex-wrap: nowrap;
  }
}
</style>
