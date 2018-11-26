<template>
 <div>  
  <textarea
    v-common-directive
    class="nvw-textView"
    :disabled="!editable"
    :maxlength="maxLength"
    :value="text"
    :spellcheck="autocorrect"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
    @keyup.enter="returnPress"
    @input="updateValue"
  />
   <slot />
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
    updateValue: function($event) {
      if (this.$listeners.input) {
        this.$emit('input', $event.target.value);
      }
      if (this.$listeners.textChange) {
        this.$emit('textChange', $event.target.value);
      }
    },
    returnPress: function($event) {
      if ($event.ctrlKey && $event.keyCode === 13 && this.$listeners.returnPress) {
        this.$emit('returnPress', $event.target.value);
      }
    },
  },
  mixins: [Gestures],
};
</script>
