<template>
    <div>
        <div v-for="item in items" v-bind:key="item[valueProp]">
            <Label :text="item[labelProp]" />
            <hr :style="separatorStyle" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListView',
    props: [
        'items',
        'separatorColor',
        'valueProp',
        'labelProp',
    ],
    data () {
        return {
            separatorStyle: '',      
        };
    },
    mounted () {
        this.separatorStyle = `background-color: ${this.separatorColor}; height: 1px; border: 0;`;
    },
};
</script>

<style lang="scss" scoped>

</style>
