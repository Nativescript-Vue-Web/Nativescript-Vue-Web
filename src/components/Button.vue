<template>
  <input 
    :value="text" 
    type="button" 
    @click="onClick" >
</template>

<script>
export default {
    name: "Button",
    props: ["tap", "text"],
    methods: {
        onClick() {
            this.$emit("tap");
        },
    },
};
</script>

<style scoped lang="scss">

</style>
