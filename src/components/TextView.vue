<template>

    <textarea
        ref="textview" 
        :disabled="!editable"
        :placeholder="hint"
        :maxlength="maxLength"
        :type="keyboardType"
        :value="value"
        :spellcheck="autoCorrect"
        @blur="onBlur"
        @focus="onFocus"
        @keyup.enter="onReturnPress($event)"
        @change="onTextChange($event)"
        @input="updateValue()"
    />
</template>

<script>
export default {
  name: 'TextView',
  props: {
    text: String,
    hint: String,
    editable: Boolean,
    maxLength: Number,
    keyboardType: String,
    autoCorrect: Boolean,
    value: String,
  },
  methods: {
    updateValue: function() {
      this.$emit('input', this.$refs.textview.value);
    },
    onBlur: function() {
      this.$emit('blur');
    },
    onFocus: function() {
      this.$emit('focus');
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
