<template>
    <div class="nvw-action-bar">
        <span v-if="title && showTitle" class="nvw-action-bar__title">{{ title }}</span>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'ActionBar',
  data: function() {
    return {
      showTitle: true,
      navigationButtonCreated: false,
    };
  },
  props: {
    title: String,
  },
  created() {
    this.$slots.default.forEach(slot => {
      if (slot.componentOptions.tag !== 'ActionItem' && slot.componentOptions.tag !== 'NavigationButton') {
        this.showTitle = false;
      }
    });
  },
  mounted() {
    this.$slots.default.forEach(slot => {
      if (slot.componentOptions.tag === 'NavigationButton') {
        if (!this.navigationButtonCreated) {
          this.navigationButtonCreated = true;
        } else {
          slot.elm.style.display = 'none';
        }
      }
    });
  },
};
</script>

<style lang="scss">
.nvw-action-bar {
  display: flex;
  height: 40px;
  background-color: #3f51b5;
  color: #ffffff;
  box-sizing: border-box;
  flex-direction: row;
  width: 100%;
  padding: 0 5px;
  align-items: center;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);

  &__title {
    margin: 0 5px;
    white-space: nowrap;
    font-size: 18px;
  }

  & > * {
    flex: 1;
    align-items: center;
  }
  .nvw-action-item,
  .nvw-navigation-button {
    flex: 0 1 auto;
  }
}
</style>
