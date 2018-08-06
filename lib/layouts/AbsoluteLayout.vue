<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'AbsoluteLayout',
};
</script>

<style lang="scss" scoped>
    .container {
        width: 500px;
        height: 500px;
        background-color: burlywood;
        position: relative;
    }
    .container > * {
        position: absolute;
    }
</style>
