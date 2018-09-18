<template>
  <textarea
    v-common-directive
    class="nvw-textView"
    :disabled="!editable"
    :maxlength="maxLength"
    :value="text"
    :spellcheck="autocorrect"
    @blur="$emit('blur', $event)"
    @change="$emit('textChange', $event)"
    @focus="$emit('focus', $event)"
    @keyup.enter="returnPress"
    @input="updateValue"
  />
</template>

<script>
import CommonDirective from '../directives/CommonDirective';

export default {
  name: 'TextView',
  model: {
    event: 'input',
    prop: 'text',
  },
  props: {
    text: String,
    hint: String,
    editable: Boolean,
    maxLength: Number,
    keyboardType: String,
    autocorrect: Boolean,
  },
  directives: {
    'common-directive': CommonDirective,
  },
  methods: {
    updateValue: function($event) {
      this.$emit('input', $event.target.value);
    },
    returnPress: function($event) {
      if ($event.ctrlKey && $event.keyCode === 13) {
        this.$emit('returnPress', $event.target.value);
      }
    },
  },
};
</script>
