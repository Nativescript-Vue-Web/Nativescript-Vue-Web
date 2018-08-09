<template>
    <input
        class="nvw-textfield"
        ref="textfield" 
        :placeholder="hint"
        :disabled="!editable"
        :maxlength="maxLength"
        :type="secure ? 'password' : keyboardType"
        :value="text"
        :spellcheck="autoCorrect"
        @blur="onBlur"
        @focus="onFocus"
        @keyup.enter="onReturnPress"
        @change="onTextChange"
        @input="updateValue"
    />
</template>

<script>
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
  },
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
