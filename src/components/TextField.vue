<template>
    <input
        v-common-directive
        v-flexboxlayout-directive
        class="nvw-textfield"
        ref="textfield" 
        :placeholder="hint"
        :disabled="!editable"
        :maxlength="maxLength"
        :type="secure ? 'password' : keyboardType"
        :value="text"
        :spellcheck="autoCorrect"
        @blur="blur ? blur($event) : null"
        @focus="focus ? focus($event) : null"
        @keyup.enter="returnPress ? returnPress($event, text) : null"
        @change="textChange ? textChange($event, text) : null"
        @input="updateValue"
    />
</template>

<script>
import CommonDirective from '../directives/CommonDirective';
import FlexboxLayoutDirective from '../directives/FlexboxLayoutDirective';

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
  methods: {
    updateValue: function() {
      this.$emit('input', this.$refs.textfield.value);
    },
  },
  directives: {
    'common-directive': CommonDirective,
    'flexboxlayout-directive': FlexboxLayoutDirective,
  },
};
</script>

<style scoped lang="scss">
</style>
