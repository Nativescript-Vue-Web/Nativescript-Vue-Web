<template>
    <div v-common-directive class="nvw-tab-view" :class="[`direction-${direction}`]">
        <div class="nvw-tab-view__header">
            <div class="nvw-tab-view__header__tab"
                 v-for="(tab,index) in children"
                 :key="index"
                 :class="{'nvw-tab-view__header__tab-active':currentTabIndex === index}"
                 role="tab"
                 :aria-controls="`tab-${index}`"
                 @click="chooseTab(index)"
                 @keyup.left="chooseTab(index-1)"
                 @keyup.right="chooseTab(index+1)">
                <span v-if="tab.icon" class="nvw-tab-view__header__tab__icon" :class="tab.icon"></span>
                <span class="nvw-tab-view__header__tab__title">{{tab.title}}</span>
            </div>
        </div>
        <div class="nvw-tab-view__content">
            <slot v-bind:currentTabIndex="currentTabIndex"></slot>
        </div>
    </div>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';

export default {
  name: 'TabView',
  props: {
    selectedIndex: {
      type: Number,
      default: 0,
    },
    tabTextColor: String,
    tabBackgroundColor: String,
    selectedTabTextColor: String,
    textTransform: String,
  },
  data() {
    return {
      currentTabIndex: this.selectedIndex || 0,
      lastTabIndex: 0,
      children: [],
    };
  },
  created() {
    if (this.$slots.default && this.$slots.default.length) {
      this.$nextTick(() => {
        for (let tab of this.$slots.default) {
          if (tab.componentOptions.tag === 'TabViewItem') {
            this.children.push({
              title: tab.componentInstance.title,
              icon: tab.componentInstance.webIcon,
              id: tab.componentInstance.computedId,
            });
          }
        }
        this.updateChild();
      });
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
        if (tab.componentOptions.tag === 'TabViewItem') {
          tab.componentInstance.selectedId = this.activeChild.id;
        }
      }
    },
    chooseTab(index) {
      if (this.currentTabIndex !== index) {
        this.lastTabIndex = this.currentTabIndex;
        if (index < 0) {
          this.currentTabIndex = index < 0 ? this.children.length - 1 : index;
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
  directives: {
    'common-directive': CommonDirective,
  },
};
</script>

<style lang="scss">
.nvw-tab-view {
  display: flex;
  flex-direction: column;
  & > * {
    flex: auto 0 0;
  }

  &__header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    outline: none;
    &__tab {
      outline: none;
      display: flex;
      flex-grow: 1;
      justify-content: center;
      align-self: center;
      cursor: pointer;
      &:hover {
        background-color: aliceblue;
      }
      &-active {
        border-bottom: 5px solid crimson;
      }
      &__icon,
      &__title {
        padding: 10px 2px 10px 2px;
      }
    }
  }
}
</style>
