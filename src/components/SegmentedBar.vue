<template>
    <div class="nvw-segmentedBar">
        <button class="nvw-segmentedBar__button"
                v-for="(tab,index) in children"
                :key="index"
                :class="{'nvw-segmentedBar__button-active':currentTabIndex === index}"
                role="tab"
                :aria-controls="`tab-${index}`"
                @click="chooseTab(index)"
                @keyup.enter="chooseTab(index)"
                @keyup.space="chooseTab(index)">
            <span v-if="tab.webIcon" class="nvw-segmentedBar__button__icon" :class="tab.webIcon"></span>
            <span class="nvw-segmentedBar__button__title">{{tab.title}}</span>
        </button>
    </div>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';

export default {
  name: 'SegmentedBar',
  model: {
    event: 'selectedIndexChanged',
    prop: 'selectedIndex',
  },
  props: {
    items: Array,
    selectedIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentTabIndex: this.selectedIndex || 0,
      childrenFromSlots: [],
    };
  },
  mounted() {
    if (this.$slots && this.$slots.default && this.$slots.default.length) {
      for (let tab of this.$slots.default) {
        if (tab.componentOptions && tab.componentOptions.tag === 'SegmentedBarItem') {
          this.childrenFromSlots.push({
            title: tab.componentOptions.propsData.title,
            webIcon: tab.componentOptions.propsData.webIcon,
          });
        } else {
          console.warn('SegmentedBar component only accepts SegmentedBarItem as child'); // eslint-disable-line
        }
      }
    }
  },
  computed: {
    test() {
      const chi = [];
      if (this.$slots && this.$slots.default && this.$slots.default.length) {
        for (let tab of this.$slots.default) {
          if (tab.componentOptions && tab.componentOptions.tag === 'SegmentedBarItem') {
            chi.push({
              title: tab.componentOptions.propsData.title,
              webIcon: tab.componentOptions.propsData.webIcon,
            });
          } else {
            console.warn('SegmentedBar component only accepts SegmentedBarItem as child'); // eslint-disable-line
          }
        }
      }
      return chi;
    },
    children() {
      if (this.items && this.items.length) {
        return this.items;
      }
      return this.childrenFromSlots;
    },
  },
  methods: {
    chooseTab(index) {
      if (this.currentTabIndex !== index) {
        if (index < 0) {
          this.currentTabIndex = index < 0 ? this.children.length - 1 : index;
        } else if (index >= this.children.length) {
          this.currentTabIndex = 0;
        } else {
          this.currentTabIndex = index;
        }
        this.$emit('selectedIndexChanged', this.currentTabIndex);
      }
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
};
</script>

<style lang="scss">
.nvw-segmentedBar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  &__button {
    background: none;
    border: solid 1px dodgerblue;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-self: center;
    cursor: pointer;
    color: dodgerblue;
    &:hover {
      background-color: aliceblue;
    }
    &-active {
      background-color: dodgerblue;
      color: #fff;
    }
    &__icon,
    &__title {
      padding: 10px 2px 10px 2px;
    }
  }
}
</style>
