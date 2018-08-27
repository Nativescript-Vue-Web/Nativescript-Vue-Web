<template>
    <div>
        <div class="nvw-listview" @click="onItemTap(item)" v-for="item in items" v-bind:key="item">
            <slot :props="item"></slot>
            <hr :style="separatorStyle" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'ListView',
  props: {
    items: Array,
    separatorColor: String,
    for: String, // TODO
  },
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
