<template>
    <div
        class="segmentedbar"
        ref="segmentedbar">
        <!-- List items as tab items if they were given -->
        <div
            ref="listItems"
            v-if="items && items.length > 0">
            <div class="tabHeader" v-for="item in items" :key="item">
                <button
                    :style="item === chosenTab ? 'border-bottom-width: 5px; border-bottom-color: crimson;':  'border: none;'"
                    @click="chooseTab(item)"
                >
                    <h5>
                        {{item}}
                    </h5>
                </button>
            </div>
            <div class="tabContent">
                {{renderChosenContent()}}
            </div>
        </div>
        <!-- Placing Items Manually -->
        <div
            ref="listManual"
            v-else>
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

<style lang="scss" scoped>
.segmentedbar {
  align-self: center;
}
.tabHeader {
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-direction: row;
  display: inline-block;
  width: 200px;
  button {
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom-width: 5px;
    border-bottom-color: crimson;
    background: transparent;
    cursor: pointer;
    outline: none;
  }
  button :hover {
    border-bottom-color: crimson;
  }
  h5 {
    color: crimson;
  }
}
.tabContent {
  justify-content: flex-start;
  margin: 20px;
}
</style>
