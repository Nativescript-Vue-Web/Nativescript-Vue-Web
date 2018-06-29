<template>
  <span :style="style">{{text}}</span>
</template>

<script>
export default {
    name: 'Label',
    props: ['text', 'left', 'top'],
    data () {
        return {
            style: '',  
        };
    },
    mounted () {
        if (Number.isInteger(parseInt(this.left)) && Number.isInteger(parseInt(this.top)) && this.$parent.$options._componentTag == 'AbsoluteLayout') {
            this.style = `left: ${this.left}px; top: ${this.top}px; background-color: blue;`;
        }
    },
};
</script>

<style scoped lang="scss">

</style>
