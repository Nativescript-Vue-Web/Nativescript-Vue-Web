<template>
    <div class="nvw-segmentedBar">
        <button class="nvw-segmentedBar__button"
                v-for="(tab,index) in children"
                :key="index"
                :class="{'nvw-segmentedBar__button--active':currentIndex === index}"
                role="tab"
                :aria-controls="`tab-${index}`"
                @click="updateSegmentedBarIndexes(index)"
                @keyup.enter="updateSegmentedBarIndexes(index)"
                @keyup.space="updateSegmentedBarIIndexes(index)">
            <span class="nvw-segmentedBar__button__title">{{tab.title}}</span>
        </button>
    </div>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';
import Gestures from '../mixins/GestureMixin';

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
      currentIndex: this.selectedIndex || 0,
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
    children() {
      if (this.items && this.items.length) {
        return this.items;
      }
      return this.childrenFromSlots;
    },
  },
  methods: {
    updateSegmentedBarIndexes(index) {
      if (this.currentIndex !== index) {
        if (index < 0) {
          this.currentIndex = this.children.length - 1;
        } else if (index >= this.children.length) {
          this.currentIndex = 0;
        } else {
          this.currentIndex = index;
        }
        this.$emit('selectedIndexChanged', this.currentIndex);
      }
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
  mixins: [Gestures],
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
    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    &:hover {
      background-color: aliceblue;
    }
    &--active {
      background-color: dodgerblue;
      color: #fff;
      &:hover {
        background-color: #1b81e5;
      }
    }
    &__title {
      padding: 10px 2px 10px 2px;
    }
  }
}
</style>
