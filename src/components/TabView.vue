<template>
    <div v-common-directive class="nvw-tab-view" :class="[`direction-${direction}`]">
        <div class="nvw-tab-view__header">
            <button class="nvw-tab-view__header__tab"
                    v-for="(tab,index) in children"
                    :key="index"
                    :class="{'nvw-tab-view__header__tab-active':currentTabIndex === index}"
                    role="tab"
                    :aria-controls="`tab-${index}`"
                    @click="chooseTab(index)"
                    @keyup.enter="chooseTab(index)"
                    @keyup.space="chooseTab(index)">
                <span v-if="tab.icon" class="nvw-tab-view__header__tab__icon" :class="tab.icon"></span>
                <span class="nvw-tab-view__header__tab__title">{{tab.title}}</span>
            </button>
        </div>
        <div class="nvw-tab-view__content">
            <slot/>
        </div>
    </div>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'TabView',
  props: {
    selectedIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentTabIndex: this.selectedIndex || 0,
      lastTabIndex: 0,
      children: [],
    };
  },
  mounted() {
    if (this.$slots && this.$slots.default && this.$slots.default.length) {
      for (let tab of this.$slots.default) {
        if (tab.componentOptions && tab.componentOptions.tag === 'TabViewItem') {
          this.children.push({
            title: tab.componentInstance.title,
            icon: tab.componentInstance.webIcon,
            id: tab.componentInstance.computedId,
          });
        } else {
          console.warn(`TabView component only accepts TabViewItem as child`); // eslint-disable-line
        }
      }
      this.updateChild();
    }
  },
  computed: {
    activeChild() {
      if (this.currentTabIndex < this.children.length) {
        return this.children[this.currentTabIndex];
      }
    },
    direction() {
      return this.currentTabIndex < this.lastTabIndex ? 'to-left' : 'to-right';
    },
  },
  methods: {
    updateChild() {
      for (let tab of this.$slots.default) {
        if (tab.componentOptions && tab.componentOptions.tag === 'TabViewItem') {
          tab.componentInstance.selectedId = this.activeChild.id;
        }
      }
    },
    chooseTab(index) {
      if (this.currentTabIndex !== index) {
        this.lastTabIndex = this.currentTabIndex;
        if (index < 0) {
          this.currentTabIndex = this.children.length - 1;
        } else if (index >= this.children.length) {
          this.currentTabIndex = 0;
        } else {
          this.currentTabIndex = index;
        }
        this.$emit('selectedIndexChanged', this.activeChild.title);
        this.updateChild();
      }
    },
  },
  mixins: [Gestures],
  directives: {
    'common-directive': CommonDirective,
  },
};
</script>

<style lang="scss">
.nvw-tab-view {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #f9f9f9;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    &__tab {
      background: none;
      display: flex;
      flex-grow: 1;
      justify-content: center;
      align-self: center;
      cursor: pointer;
      border-top: none;
      border-right: none;
      border-bottom: 5px solid transparent;
      border-left: none;
      &:focus {
        outline: none;
      }

      &:hover {
        background-color: aliceblue;
      }
      &-active {
        border-bottom: 5px solid dodgerblue;
      }
      &__icon,
      &__title {
        padding: 10px 2px 10px 2px;
      }
    }
  }

  &__content {
    padding-top: 5px;
  }
}
</style>
