<template>
      <button class="nvw-button" @click="onClick" :value="text" ></button> 
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        textWrap: Boolean, // TODO
    },
    methods: {
        onClick() {
            this.$emit('tap');
        }
    }
};
</script>

<style scoped lang="scss">

.nvw-button {
  border: none;
  border-radius: 2px;
}
</style>
