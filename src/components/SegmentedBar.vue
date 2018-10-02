<template>
  <div class="nvw-segmentedBar" ref="segmentedbar">
      <div class="nvw-segmentedBar__tabHeader" v-for="(item,index) in itemList" :key="item">
         <SegmentedBarItem :class="selectedIndexLocal === index ? 'active' : 'inactive'" :title="item" @tap="chooseTab($event,index)"/>
      </div>
    <div class="nvw-segmentedBar__slots" v-show="slotShow">
     <slot></slot>
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
    selectedIndex: {
      type: Number,
      default: 0,
    },
    selectedBackgroundColor: String,
  },
  data() {
    return {
      slotShow: false,
      selectedIndexLocal: null,
    };
  },
  mounted() {
    if (this.items && this.items.length) {
      this.chosenTab = this.value ? this.value : this.items[0];
    }
  },
  methods: {
    chooseTab: function(event, selectedIndex) {
      this.selectedIndexLocal = selectedIndex;
      this.$emit('selectedIndexChange', event);
      this.$emit('input', this.selectedIndexLocal);
    },
  },
  computed: {
    itemList: function() {
      const itemList = [];
      if (this.items && this.items.length) {
        for (let item of this.items) {
          itemList.push(item);
        }
      } else if (this.$slots.default && this.$slots.default.length) {
        for (let item of this.$slots.default) {
          if (item.componentOptions.tag === 'SegmentedBarItem') itemList.push(item.componentOptions.propsData.title);
        }
      }
      return itemList;
    },
  },
  created() {
    this.selectedIndexLocal = this.selectedIndex;
  },
  watch: {
    selectedIndex: function() {
      this.selectedIndexLocal = this.selectedIndex;
    },
  },
};
</script>

<style lang="scss">
.nvw-segmentedBar {
  &__tabHeader {
    display: inline-block;
  }
}
</style>
