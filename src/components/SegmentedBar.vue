<template>
  <div class="nvw-segmentedBar" ref="segmentedbar">
    <!-- List items as tab items if they were given -->
    <div ref="listItems" v-if="items && items.length > 0">
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
    <div ref="listManual" v-else>
       <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SegmentedBar',
  props: ['items', 'value'],
  data() {
    return {
      chosenTab: '',
    };
  },
  mounted() {
    this.chosenTab = this.value ? this.value : this.items[0];
  },
  computed: {
    tabButtonStyle: function(item) {
      return item === this.chosenTab ? 'border-bottom-width: 5px; border-bottom-color: crimson;' : 'border: none;';
    },
  },
  methods: {
    chooseTab: function(tab) {
      this.chosenTab = tab;
    },
    renderChosenContent: function() {
      return `This tab content belongs to the ${this.chosenTab}.`;
    },
  },
};
</script>

<style lang="scss">
.nvw-segmentedBar {
  align-self: center;
  &__tabHeader {
    justify-content: space-between;
    align-items: center;
    text-align: center;
    flex-direction: row;
    display: inline-block;
    width: 200px;
    & button {
      border-left: none;
      border-top: none;
      border-right: none;
      border-bottom-width: 5px;
      border-bottom-color: crimson;
      background: transparent;
      cursor: pointer;
      outline: none;
    }
    & button :hover {
      border-bottom-color: crimson;
    }
    & h5 {
      color: crimson;
    }
  }
  &__tabContent {
    justify-content: flex-start;
    margin: 20px;
  }
}
</style>
