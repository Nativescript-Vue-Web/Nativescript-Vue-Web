<template>
    <div v-common-directive class="nvw-tab-view" :class="[`direction-${direction}`]">
        <div class="nvw-tab-view__header">
            <div class="nvw-tab-view__header__tab"
                 v-for="(tab,index) in children"
                 :key="index"
                 :class="{'nvw-tab-view__header__tab-active':currentTabId === index}"
                 role="tab"
                 :aria-controls="`tab-${index}`"
                 @click="chooseTab(index)"
                 @keyup.left="chooseTab(index-1)"
                 @keyup.right="chooseTab(index+1)">
                <span class="nvw-tab-view__header__tab__title">{{tab.title}}</span>
            </div>
        </div>
        <div class="nvw-tab-view__content">
            <slot/>
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
  provide() {
    const pass = {};
    Object.defineProperty(pass, 'activeChild', {
      get: () => this.activeChild,
    });
    pass.$_addToChild = this.$_addToChild.bind(this);
    pass.$_removeFromChild = this.$_removeFromChild.bind(this);
    return {
      nvwTabsDataPass: pass,
      nvwTabs: {
        data: this.injectedData,
      },
    };
  },
  data() {
    return {
      currentTabId: this.selectedIndex || 0,
      lastTabId: 0,
      direction: 'to-right',
      injectedData: {},
      children: [],
    };
  },

  computed: {
    activeChild() {
      if (this.currentTabId < this.children.length) {
        return this.children[this.currentTabId];
      }
    },
  },
  methods: {
    chooseTab(index) {
      if (this.currentTabId !== index) {
        if (index < 0) {
          this.activateChild(index < 0 ? this.children.length - 1 : index);
        } else if (index >= this.children.length) {
          this.activateChild(0);
        } else {
          this.activateChild(index);
        }
      }
    },
    activateChild(index) {
      const oldIndex = this.currentTabId;
      this.currentTabId = index;
      this.$emit('selectedIndexChanged', index);
      if (index < 0) {
        index = 0;
      } else if (index >= this.children.length) {
        index = this.children.length - 1;
      }
      this.childActivated(index, oldIndex);
    },
    childActivated(index, oldIndex) {
      this.direction = index === oldIndex ? '' : index < oldIndex ? 'to-left' : 'to-right';
    },

    $_addToChild(vm) {
      if (this.$slots && this.$slots.default) {
        this.$nextTick(() => {
          const childComponents = this.$slots.default.reduce((list, vnode) => {
            if (vnode.child) {
              list.push(vnode.child.$_pass);
            }
            return list;
          }, []);
          const index = childComponents.indexOf(vm);
          if (index !== -1) {
            this.children.splice(index, 0, vm);
          }
          this.$_updateChild('add', index, vm);
        });
      }
    },

    $_removeFromChild(vm) {
      const index = this.children.indexOf(vm);
      // Remove child
      if (index !== -1) {
        this.children.splice(index, 1);
      }
      // Hook
      this.$_updateChild('remove', index, vm);
    },

    $_updateChild(operation, index) {
      if (operation === 'add') {
        if (index <= this.currentTabId) {
          this.activateChild(this.currentTabId + 1);
        }
        if (this.children.length === 1) {
          this.activateChild(0);
        }
      } else if (operation === 'remove') {
        if (index <= this.currentTabId) {
          this.activateChild(this.currentTabId - 1);
        }
      }
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
};

// emit selectedIndexChanged
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
      justify-content: space-around;
      cursor: pointer;
      &:hover {
        background-color: aliceblue;
      }
      &-active {
        border-bottom: 5px solid crimson;
      }
      &__title {
        padding: 10px;
      }
    }
  }
}
</style>
