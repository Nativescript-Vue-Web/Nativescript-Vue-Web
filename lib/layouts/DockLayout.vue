<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'DockLayout',
    props: ['stretchLastChild'],
};
</script>

<style lang="scss" scoped>
    .container {
        width: 500px;
        height: 500px;
        background-color: crimson;
        display: inline-flex;
        flex-flow: column row;
    }
</style>
