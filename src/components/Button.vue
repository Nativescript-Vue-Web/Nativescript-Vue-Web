<template>
  <button
    v-common-directive
    class="nvw-button"
    :class="fontClass"
    :type="type"
    :style="{'white-space': textWrap ? 'normal' : 'nowrap'}"
    :disabled="!isEnabled"
  >{{textValue}}</button>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'Button',
  props: {
    text: String,
    textWrap: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
      validator: val => ['button', 'reset', 'submit'].includes(val),
    },
    isEnabled: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    //adds icon classes to button
    fontClass() {
      if (typeof this.text === 'string' && this.text.includes(' | fonticon')) {
        return this.text.replace(' | fonticon', '');
      }
    },
    //removes text when fonticon filter is present
    textValue() {
      if (typeof this.text === 'string') {
        return this.text.includes(' | fonticon') ? '' : this.text;
      } else {
        return this.text;
      }
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.nvw-button {
  background-color: #d6d7d7;
  padding: 10px;
  min-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  border: none;
  border-radius: 2px;
  font-weight: bolder;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2), 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
  transition-delay: 0.3s;
  transition: box-shadow 0.2s, background-color 0.2s, transform 1s;
  &:hover {
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.2), 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  &:active {
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.2), 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
    background-color: #c0c1c1;
  }
  &:focus {
    outline: 0 !important;
  }
}
</style>
