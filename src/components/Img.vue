<template>
  <img :src="imageSrc" :class="stretchClass" :style="{ width: this.convertPxStyle(this.width), height: this.convertPxStyle(this.height)}" />
</template>

<script>
export default {
  name: 'Img',
  props: {
    src: String,
    stretch: {
      type: String,
      default: 'none',
    },
    width: [String, Number],
    height: [String, Number],
  },
  data() {
    return {
      imageSrc: `${this.src.replace('~', '')}`,
    };
  },
  computed: {
    stretchClass: function() {
      return {
        'nvw-img': this.stretch === 'none' ? true : false,
        'nvw-img nvw-img--fill': this.stretch === 'fill' ? true : false,
        'nvw-img nvw-img--aspect-fill': this.stretch === 'aspectFill' ? true : false,
        'nvw-img nvw-img--aspect-fit': this.stretch === 'aspectFit' ? true : false,
      };
    },
  },
  methods: {
    convertPxStyle: function(value) {
      return value + 'px';
    },
  },
};
</script>

<style scoped lang="scss">
//TODO css will rebuild
.nvw-img {
}

.nvw-img--fill {
  width: inherit;
  height: inherit;
}

.nvw-img--aspect-fill {
  width: inherit;
}
</style>
