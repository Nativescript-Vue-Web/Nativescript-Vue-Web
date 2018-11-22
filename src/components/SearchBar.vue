<template>
  <div v-common-directive :style="{backgroundColor: textFieldBackgroundColor}" class="nvw-searchbar">
    <span @click="$emit('submit')" class="nvw-searchbar__search-icon" />
    <input
      ref="searchbar"
      class="nvw-searchbar__search-input"
      :placeholder="hint"
      :type="keyboardType"
      :value="text"
      @keyup.enter="$emit('submit')"
      @input="updateValue"
    />
    <span v-if="text" @click="onClear" class="nvw-searchbar__clear-icon" />
  </div>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';
import Gestures from '../mixins/GestureMixin';

export default {
  model: {
    event: 'input',
    prop: 'text',
  },
  name: 'SearchBar',
  props: {
    keyboardType: String,
    hint: String,
    text: String,
    textFieldBackgroundColor: String,
    textFieldHintColor: String, // TODO
  },
  methods: {
    updateValue: function($event) {
      this.$emit('input', $event.target.value);
      this.$emit('textChange', $event.target.value);
    },
    onClear: function(event) {
      this.$emit('input', '');
      this.$emit('clear', event);
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.nvw-searchbar {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  min-width: 90px;
  max-height: 75px;
  min-height: 28px;
  padding: 7px;
  border-radius: 12px;
  box-shadow: 2px 3px grey;

  &__search-input {
    margin: 0;
    padding: 0;
    text-align: left;
    border: none;
    border-right: solid 3px rgba(54, 79, 199, 0.5);
    border-left: solid 3px rgba(54, 79, 199, 0.5);
    box-shadow: 5px white;
    flex: 1;
    min-width: 30px;
    &:focus {
      box-shadow: 0 0 4px rgba(54, 79, 199, 0.5);
    }
  }

  &__search-icon {
    background-image: url('../assets/icons/searchIcon.png');
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center center;
    flex: 0 0 30px;
  }

  &__clear-icon {
    background-image: url('../assets/icons/clearIcon.png');
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center center;
    flex: 0 0 30px;
  }
}
</style>
