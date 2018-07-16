<template>
  <input ref="button" type="button" @click="onClick" :value="text" />
</template>

<script>
export default {
    name: 'Button',
    props: ['tap', 'text'],
    methods: {
        onClick() {
            console.log('onTap !');
            this.$emit('tap');
        },
    },
};
</script>

<style scoped lang="scss">

</style>
