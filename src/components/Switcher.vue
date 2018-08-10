<template>
    <label v-common-directive class="nvw-switch">
        <input
          class="nvw-switch__input"
          ref="switch"
          type="checkbox"
          :checked="checked"
          @change="checkedChange ? checkedChange($event) : null"
          @click="updateValue()"
        />
        <span class="nvw-switch__slider" />
    </label>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';

export default {
  name: 'Switcher',
  model: {
    event: 'input',
    prop: 'checked',
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    checkedChange: Function,
  },
  methods: {
    updateValue: function() {
      this.$emit('input', this.$refs.switch.checked);
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
};
</script>

<style lang="scss" scoped>
.nvw-switch {
  position: relative;
  display: inline-block;
  width: 90px;
  height: 34px;

  &__input {
    display: none;
  }

  &__input:checked + &__slider {
    background-color: #2ab934;
  }

  &__input:checked + &__slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(55px);
  }

  &__input:checked + &__slider:after {
    content: 'ON';
  }

  &__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #ca2222;
    -webkit-transition: 0.5s;
    transition: 0.4s;
    border-radius: 34px;
  }

  &__slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  &__input:focus + &__slider {
    box-shadow: 0 0 1px #2196f3;
  }

  &__slider:after {
    content: 'OFF';
    color: white;
    display: block;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    font-size: 10px;
    font-family: Verdana, sans-serif;
  }
}
</style>
