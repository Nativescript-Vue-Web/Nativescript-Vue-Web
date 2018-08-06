<template>
    <div :style="style" class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'FlexboxLayout',
    props: ['flexDirection', 'flexWrap', 'justifyContent', 'alignItems', 'alignContent'],
    data () {
        return {
            style: '',      
        };
    },
    mounted () {
        this.style = `flex-direction: ${this.flexDirection}; flex-wrap: ${this.flexWrap}; justify-content: ${this.justifyContent}; align-items: ${this.alignItems}; align-content: ${this.alignContent};`;
    },
};
</script>

<style lang="scss" scoped>
    .container {
        width: 50%;
        height: 500px;
        background-color: crimson;
        display: inline-flex;
    }
</style>
