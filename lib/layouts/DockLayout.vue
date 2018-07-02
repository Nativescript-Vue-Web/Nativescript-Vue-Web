<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "DockLayout",
    props: ["stretchLastChild"],
};
</script>

<style lang="scss" scoped>
    .container {
        width: 50%;
        height: 500px;
        background-color: crimson;
        display: inline-flex;
        position: relative;
        justify-content: flex-start;
    }
</style>
