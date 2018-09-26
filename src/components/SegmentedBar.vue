<template>
  <div class="nvw-segmentedBar" ref="segmentedbar">
    <!-- List items as tab items if they were given -->
    <div ref="listItems" v-if="items && items.length > 0 && !haveSlots">
      <div class="nvw-segmentedBar__tabHeader" v-for="item in items" :key="item">
        <button style="{tabButtonStyle(item)}" @click="chooseTab(item)">
          <h5>
            {{item}}
          </h5>
        </button>
      </div>
      <div class="nvw-segmentedBar__tabContent">
        {{renderChosenContent()}}
      </div>
    </div>
    <!-- Placing Items Manually -->
    <div v-else>
      <div class="nvw-segmentedBar__tabHeader">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SegmentedBar',
  model: {
    event: 'input',
    prop: 'selectedIndex',
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    selectedIndex: Number,
    selectedBackgroundColor: String,
  },
  mounted() {
    if (this.items && this.items.length) {
      this.chosenTab = this.value ? this.value : this.items[0];
    }
  },
  computed: {
    tabButtonStyle: function(item) {
      return item === this.chosenTab ? 'border-bottom-width: 5px; border-bottom-color: crimson;' : 'border: none;';
    },
    haveSlots: function() {
      return this.$slots.default.length;
    },
  },
  methods: {
    chooseTab: function(event, tab) {
      this.$emit('selectedIndexChange', event);
      this.$emit('input', tab);
    },
    renderChosenContent: function() {
      return `This tab content belongs to the ${this.chosenTab}.`;
    },
  },
};
</script>

<style lang="scss">
.nvw-segmentedBar {
  &__tabHeader {
    & button {
      margin-left: 30px;
      background-color: Transparent;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      outline: none;
      text-transform: uppercase;
    }
    & button :active {
      color: white;
      transition: none;
    }
  }
}
</style>
