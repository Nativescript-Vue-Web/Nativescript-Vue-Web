<template>
    <span v-html="html" />
</template>

<script>
export default {
    name: 'HtmlView',
    props: {
        html: String,
    },
};
</script>

<style lang="scss" scoped>

</style>
