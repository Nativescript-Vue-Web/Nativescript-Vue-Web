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
        @blur="blur ? blur($event) : null"
        @change="textChange"
        @focus="focus ? focus($event) : null"
        @keyup.enter="returnPress ? returnPress($event, text) : null"
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
    autoCorrect: Boolean,
    textChange: Function,
    returnPress: Function,
    focus: Function,
    blur: Function,
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
