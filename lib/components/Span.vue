<template>
    <span class="nvw-span">
        {{text}}
    </span>
</template>

<script>
export default {
    name: 'Span',
    props: {
        text: String,
    },
    created () {
        console.log(this.$props);    
    },
};
</script>

<style lang="scss" scoped>

</style>
