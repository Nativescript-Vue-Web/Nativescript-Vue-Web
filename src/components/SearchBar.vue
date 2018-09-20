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
          @change="$emit('textChange')"
        />
        <span v-if="text" @click="onClear" class="nvw-searchbar__clear-icon" />
    </div>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';

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
    updateValue: function(event) {
      this.$emit('input', event.target.value);
    },
    onClear: function(event) {
      this.$emit('input', '');
      this.$emit('clear', event);
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
};
</script>

<style lang="scss" scoped>
.nvw-searchbar {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  min-width: 90px;
  min-height: 28px;
  padding: 5px;

  &__search-input {
    margin: 0;
    padding: 0;
    text-align: left;
    font-weight: bold;
    flex: 1;
    min-width: 30px;
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
