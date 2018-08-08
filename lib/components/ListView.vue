<template>
    <div>
        <div class="listItem" @click="onItemTap(item)" v-for="item in items" v-bind:key="item[valueProp]">
            <Label :text="item[labelProp]" />
            <hr :style="separatorStyle" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'ListView',
  props: ['items', 'separatorColor', 'valueProp', 'labelProp', 'itemTap'],
  data() {
    return {
      separatorStyle: '',
    };
  },
  mounted() {
    this.separatorStyle = `background-color: ${this.separatorColor}; height: 1px; border: 0;`;
  },
  methods: {
    onItemTap: function(item) {
      this.$emit('itemTap', item);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
