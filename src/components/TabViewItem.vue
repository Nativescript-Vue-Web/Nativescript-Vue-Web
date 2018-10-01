<template>
    <transition name="switch">
        <div v-common-directive class="nvw-tab-view-item">
            <div v-show="active" class="nvw-tab-view-item__content" :class="{selected: active}" role="tabpanel" :aria-hidden="!active ? 'true' : null">
                <slot/>
            </div>
        </div>
    </transition>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';

export default {
  name: 'TabViewItem',
  props: {
    title: String,
    iconSource: String,
  },
  inject: ['nvwTabsDataPass', 'nvwTabs'],
  created() {
    const pass = (this.$_pass = {});
    for (const key in this.$data) {
      if (key.charAt(0) === '$' || key.charAt(0) === '_') continue;
      Object.defineProperty(pass, key, {
        enumerable: true,
        configurable: false,
        get: () => this.$data[key],
      });
    }
    for (const key in this.$props) {
      if (key.charAt(0) === '$' || key.charAt(0) === '_') continue;
      Object.defineProperty(pass, key, {
        enumerable: true,
        configurable: false,
        get: () => this.$props[key],
      });
    }
    Object.defineProperty(pass, '$slots', {
      enumerable: false,
      configurable: false,
      get: () => this.$slots,
    });
    this.nvwTabsDataPass.$_addToChild(pass);
  },
  data() {
    return {
      showContent: false,
    };
  },
  computed: {
    active() {
      return this.nvwTabsDataPass.activeChild === this.$_pass;
    },
  },
  watch: {
    active(value, oldValue) {
      // Lazy content creation
      if (value && value !== oldValue && !this.showContent) {
        this.showContent = true;
      }
    },
  },
  beforeDestroy() {
    this.nvwTabsDataPass.$_removeFromChild(this.$_pass);
  },
  directives: {
    'common-directive': CommonDirective,
  },
};
</script>

<style lang="scss">
$offset: 50px;
.switch-enter-active,
.switch-leave-active {
  transition: all 0.15s cubic-bezier(0, 0, 0.2, 1);
}

.switch-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
}

.switch-enter,
.switch-leave-to {
  opacity: 0;
}

.nvw-tab-view.direction-to-right {
  .switch-enter {
    transform: translateX($offset);
  }
  .switch-leave-to {
    transform: translateX(-$offset);
  }
}

.nvw-tab-view.direction-to-left {
  .switch-enter {
    transform: translateX(-$offset);
  }
  .switch-leave-to {
    transform: translateX($offset);
  }
}

.nvw-tab-view-item {
  display: flex;
  flex-direction: column;
  flex: 100% 1 1;
  position: relative;
  outline: none;
}
</style>
