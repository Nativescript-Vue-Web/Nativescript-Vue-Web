<template>
    <button class="nvw-button" @click="onClick" :class="{ 'nvw-button--text-wrap': textWrap}" :style="{width: convertPxStyle(this.width), height: convertPxStyle(this.height)}">{{text}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        textWrap: {
            type: Boolean,
            default: false
        },
        width: {
            type: Number
        },
        height: {
            type: Number,
            default: 21
        }
    },
    methods: {
        onClick() {
            this.$emit('tap');
        },
        convertPxStyle: function (value) {
            if(typeof value === 'undefined')
                return '';
            else
                return value.toString().includes('%') ? value : value + 'px';
        }
    }
};
</script>

<style scoped lang="scss">
    .nvw-button {

    }

    .nvw-button--text-wrap {
        width: 50px;
        overflow: hidden;
    }
</style>
