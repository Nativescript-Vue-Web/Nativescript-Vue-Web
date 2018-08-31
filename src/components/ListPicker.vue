<template>
    <select
    class="nvw-list-picker"
    @change="$emit('selectedIndexChange', $event)"
    @input="updateValue">
      <option v-for="(item, index) in items"
                v-bind:item="item"
                v-bind:index="index"
                v-bind:key="index"
                :value="item"
                :selected="selectedIndex === index">
            {{ item }}
        </option>
    </select>
</template>

<script>
export default {
  name: 'ListPicker',
  model: {
    event: 'input',
    prop: 'selectedIndex',
  },
  props: {
    items: {
      type: Array,
    },
    selectedIndex: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    updateValue: function($event) {
      const index = this.items.findIndex(obj => obj === $event.target.value);
      this.$emit('input', index);
    },
  },
};
</script>
