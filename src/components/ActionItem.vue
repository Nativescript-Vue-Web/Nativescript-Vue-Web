<template>
    <div class="nvw-action-item" :class="{'nvw-action-item--has-icon' : webIcon}" @click="onTap($event)">
        <span v-if="webIcon" class="nvw-action-item__icon" :class="webIcon"></span>
        <span v-else class="nvw-action-item__text">{{ text }}</span>
    </div>
</template>

<script>
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'ActionItem',
  props: {
    text: String,
    webIcon: {
      type: String,
    },
  },
  methods: {
    onTap(event) {
      this.$emit('tap', event);
    },
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.nvw-action-item {
  display: flex;
  order: 100;
  min-width: 30px;
  min-height: 30px;
  align-items: center;
  justify-content: center;
  background-position: center;
  transition: background 0.4s;
  padding: 5px;
  user-select: none;

  &--has-icon {
    padding: 0;
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1) radial-gradient(circle, transparent 1%, rgba(255, 255, 255, 0.1) 1%) center/15000%;
  }

  &:active {
    background-size: 100%;
    transition: background 0s;
  }
}
</style>
