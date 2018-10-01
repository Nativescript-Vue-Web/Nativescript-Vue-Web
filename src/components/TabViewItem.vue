<template>
    <div v-common-directive class="nvw-tab-view-item">
        <transition name="switch">
            <div :id="computedId" v-show="isActive" class="nvw-tab-view-item__content" :class="{selected: isActive}" role="tabpanel" :aria-hidden="!isActive">
                <slot/>
            </div>
        </transition>
    </div>
</template>

<script>
import CommonDirective from '../directives/CommonDirective';

export default {
  name: 'TabViewItem',
  props: {
    id: { default: null },
    title: { type: String, required: true },
    iconSource: String,
  },
  data() {
    return {
      selectedId: null,
    };
  },
  computed: {
    isActive() {
      return this.computedId === this.selectedId;
    },
    computedId() {
      return this.id ? this.id : this.title.toLocaleLowerCase().replace(/ /g, '-');
    },
    hash() {
      return '#' + this.computedId;
    },
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
  transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
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
