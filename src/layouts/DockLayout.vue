<template>
    <div v-common-directive class="nvw-dock-layout">
        <div class="nvw-dock-layout__left" data-area="left" ref="left">
        </div>
        <div class="nvw-dock-layout__right">
            <div class="nvw-dock-layout__right__top" data-area="top" ref="top">
            </div>
            <div class="nvw-dock-layout__right__bottom">
                <div class="nvw-dock-layout__right__bottom__left">
                    <div class="nvw-dock-layout__right__bottom__left__top">
                        <div class="nvw-dock-layout__right__bottom__left__top_center" data-area="center" ref="center">
                        </div>
                    </div>
                    <div class="nvw-dock-layout__right__bottom__left__bottom" data-area="bottom" ref="bottom">
                    </div>
                </div>
                <div class="nvw-dock-layout__right__bottom__right" data-area="right" ref="right">
                </div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
import Gestures from '../mixins/GestureMixin';
import CommonDirective from '../directives/CommonDirective';

export default {
  name: 'DockLayout',
  props: {
    stretchLastChild: {
      type: Boolean,
      default: true,
    },
  },
  mixins: [Gestures],
  mounted() {
    for (let slot of this.$slots.default) {
      let parent;
      const dock = slot.data && slot.data.attrs && slot.data.attrs.dock ? slot.data.attrs.dock : '';
      switch (dock) {
        case 'left':
        case 'top':
        case 'right':
        case 'bottom':
          parent = this.$refs[dock];
          break;
        default:
          parent = this.$refs.center;
          break;
      }
      parent.appendChild(slot.elm);

      let [last] = this.$slots.default.slice(-1);
      if (slot === last && this.stretchLastChild) {
        if (parent.previousSibling) {
          parent.previousSibling.classList.add('nvw-dock-layout__nonFlexible');
        } else if (parent.nextSibling) {
          parent.nextSibling.classList.add('nvw-dock-layout__nonFlexible');
        }
        slot.elm.parentElement.classList.add('nvw-dock-layout__stretchLastChild');
        slot.elm.classList.add('nvw-dock-layout__stretchLastChild');
      }
    }
  },
  directives: {
    'common-directive': CommonDirective,
  },
};
</script>

<style lang="scss">
.nvw-dock-layout {
  display: flex;
  width: 100%;
  height: 100%;

  .nvw-dock-layout__nonFlexible {
    flex: 0;
  }
  .nvw-dock-layout__stretchLastChild {
    flex: 1;
  }
  * {
    display: flex;
  }

  &__right {
    display: flex;
    flex-direction: column;
    flex: 1;

    &__top {
      flex-direction: column;
    }

    &__bottom {
      display: flex;
      flex: 1;

      &__left {
        display: flex;
        flex: 1;
        flex-direction: column;

        &__top {
          display: flex;
          flex: 1;
        }

        &__bottom {
          flex-direction: column-reverse;
        }
      }

      &__right {
        flex-direction: row-reverse;
      }
    }
  }
}
</style>
