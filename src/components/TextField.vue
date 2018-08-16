<template>
    <input
        v-common-directive
        class="nvw-textfield"
        :placeholder="hint"
        :disabled="!editable"
        :maxlength="maxLength"
        :type="secure ? 'password' : keyboardType"
        :value="text"
        :spellcheck="autoCorrect"
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
  model: {
    event: 'input',
    prop: 'text',
  },
  name: 'TextField',
  props: {
    maxLength: Number,
    keyboardType: String,
    secure: {
      type: Boolean,
      default: false,
    },
    text: String,
    hint: String,
    editable: Boolean,
    autocorrect: Boolean,
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

<style scoped lang="scss">
</style>
