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
        @keyup.enter="$emit('returnPress', $event)"
        @input="updateValue"
    />
</template>

<script>
import CommonDirective from '../directives/CommonDirective';

export default {
  name: 'TextView',
  props: {
    text: String,
    hint: String,
    editable: Boolean,
    maxLength: Number,
    keyboardType: String,
    autocorrect: Boolean,
    value: String,
  },
  directives: {
    'common-directive': CommonDirective,
  },
  methods: {
    updateValue: function($event) {
      this.$emit('input', $event.target.value);
    },
  },
};
</script>
