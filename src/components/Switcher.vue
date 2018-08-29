<template>
  <input
    v-common-directive
    class="nvw-switch"
    type="checkbox"
    :checked="checked"
    @change="$emit('checkedChange', $event)"
    @click="updateValue"
  />
</template>

<script>
import CommonDirective from '../directives/CommonDirective';

export default {
  name: 'Switcher',
  model: {
    event: 'input',
    prop: 'checked',
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    updateValue: function(event) {
      this.$emit('input', event.target.checked);
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
};
</script>
