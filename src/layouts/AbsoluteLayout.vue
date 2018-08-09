<template>
    <div class="nvw-absolute-layout" :style="{width: convertPxStyle(width), height: convertPxStyle(height), backgroundColor: backgroundColor}">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'AbsoluteLayout',
  props: {
    width: {
      default: '100%',
    },
    height: {
      default: '100%',
    },
    backgroundColor: {},
  },
  mounted() {
    this.$slots.default.forEach(vnode => {
      const propsData = vnode.componentOptions.propsData;

      for (const prop in propsData) {
        if (!propsData.hasOwnProperty(prop)) continue;

        switch (prop) {
          case 'backgroundColor':
            vnode.elm.style.backgroundColor = propsData[prop];
            break;
          case 'top':
            vnode.elm.style.top = this.convertPxStyle(propsData[prop]);
            break;
          case 'left':
            vnode.elm.style.left = this.convertPxStyle(propsData[prop]);
            break;
          case 'width':
            vnode.elm.style.width = this.convertPxStyle(propsData[prop]);
            break;
          case 'height':
            vnode.elm.style.height = this.convertPxStyle(propsData[prop]);
            break;
        }
      }
    });
  },
  methods: {
    convertPxStyle: function(value) {
      return value.toString().includes('%') ? value : value + 'px';
    },
  },
};
</script>

<style lang="scss" scoped>
.nvw-absolute-layout {
  background-color: burlywood;
  position: relative;
}

.nvw-absolute-layout > * {
  position: absolute;
}
</style>
