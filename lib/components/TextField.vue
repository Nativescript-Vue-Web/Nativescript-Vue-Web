<template>
    <input
        ref="textfield" 
        :placeholder="hint"
        :disabled="!editable"
        :maxlength="maxLength"
        :type="secure ? 'password' : keyboardType"
        :value="value"
        :spellcheck="autoCorrect"
        @blur="onBlur($event)"
        @focus="onFocus($event)"
        @keyup.enter="onReturnPress($event)"
        @change="onTextChange($event)"
        @input="updateValue()"
    />
</template>

<script>
export default {
  name: 'TextField',
  props: ['maxLength', 'keyboardType', 'secure', 'text', 'hint', 'editable', 'autoCorrect', 'blur', 'focus', 'returnPress', 'textChange', 'value'],
  methods: {
    updateValue: function() {
      this.$emit('input', this.$refs.textfield.value);
    },
    onBlur: function(event) {
      this.$emit('blur', event);
    },
    onFocus: function(event) {
      this.$emit('focus', event);
    },
    onTextChange: function(event) {
      this.$emit('textChange', event);
    },
    onReturnPress: function(event) {
      this.$emit('returnPress', event);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
