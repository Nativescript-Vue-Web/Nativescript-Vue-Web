<template>
  <div class="nvw-textview-container">
    <textarea
      v-common-directive
      class="nvw-textview-container__textview"
      :disabled="!editable"
      :maxlength="maxLength"
      :value="text"
      :placeholder="hint"
      :spellcheck="autocorrect"
      ref="textView"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      @keyup.enter="returnPress"
      @input="updateValue"
      @keydown="onKeyDown"
      @paste="onPaste"
    />
    <slot/>
  </div>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'TextView',
  model: {
    event: 'input',
    prop: 'text',
  },
  props: {
    preventNextLine: {
      type: Boolean,
      default: false,
    },
    text: String,
    hint: String,
    editable: {
      type: Boolean,
      default: true,
    },
    maxLength: Number,
    keyboardType: String,
    autocorrect: Boolean,
  },
  directives: {
    'common-directive': CommonDirective,
  },
  methods: {
    onKeyDown($event) {
      if (this.$listeners.onKeyDown) {
        this.$emit('onKeyDown', $event);
      }
      if (!$event.shiftKey && $event.which === 13 && this.preventNextLine) {
        $event.preventDefault();
      }
    },
    onPaste($event) {
      if (this.$listeners.onPaste) {
        this.$emit('onPaste', $event);
      }
    },
    updateValue($event) {
      if (this.$listeners.input) {
        this.$emit('input', $event.target.value);
      }
      if (this.$listeners.textChange) {
        this.$emit('textChange', $event.target.value);
      }
    },
    returnPress($event) {
      if (!$event.shiftKey && $event.which === 13 && this.$listeners.returnPress) {
        this.$emit('returnPress', $event.target.value);
      }
    },
  },
  mixins: [Gestures],
};
</script>
