<template>
    <label class="nvw-switch">
        <input
          ref="switch"
          type="checkbox"
          :checked="checked"
          @change="onCheckedChange($event)"
          @click="updateValue()"
        />
        <span class="nvw-switch__slider" />
    </label>
</template>

<script>
export default {
    name: 'Switcher',
    model: {
        event: 'input',
        prop: 'checked'
    },
    props: {
        checked: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        updateValue: function() {
            this.$emit('input', this.$refs.switch.checked);
        },
        onCheckedChange: function(event) {
            this.$emit('checkedChange', event);
        },
    },
};
</script>

<style lang="scss" scoped>
@mixin transform() {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(55px);
}

@mixin pos {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.nvw-switch {
  position: relative;
  display: inline-block;
  width: 90px;
  height: 34px;

  & input {
    display: none;
  }

  & input:checked + .nvw-switch__slider {
    background-color: #2ab934;
  }

  & input:checked + .nvw-switch__slider:before {
    @include transform();
  }

  & input:checked + .nvw-switch__slider:after {
    content: "ON";
  }

  & .nvw-switch__slider {
    position: absolute;
    cursor: pointer;
    @include pos();
    background-color: #ca2222;
    -webkit-transition: 0.5s;
    transition: 0.4s;
    border-radius: 34px;
  }

  & .nvw-switch__slider:before {
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

  & input:focus + .nvw-switch__slider {
    box-shadow: 0 0 1px #2196f3;
  }

  & .nvw-switch__slider:after {
    content: "OFF";
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

