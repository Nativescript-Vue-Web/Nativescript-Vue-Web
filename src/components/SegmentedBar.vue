<template>
  <div class="nvw-segmentedBar" ref="segmentedbar">
      <div class="nvw-segmentedBar__tabHeader" v-for="(item,index) in itemList" :key="item">
         <SegmentedBarItem :class="{'nvw-segmentedBar__tabHeader--active': selectedIndex === index}" :title="item" @tap="chooseTab($event,index)"/>
      </div>
    <div v-show="slotShow">
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
    };
  },
  mounted() {
    if (this.items && this.items.length) {
      this.chosenTab = this.value ? this.value : this.items[0];
    }
  },
  methods: {
    chooseTab: function(event, selectedIndex) {
      this.$emit('selectedIndexChange', event);
      this.$emit('input', selectedIndex);
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
};
</script>

<style lang="scss">
.nvw-segmentedBar {
  &__tabHeader {
    display: inline-block;
    &--active {
      color: white;
      text-decoration: none;
      background-color: #00bfff;
    }
  }
}
</style>
