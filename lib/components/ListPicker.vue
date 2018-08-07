<template>
    <select @change="onSelectedIndexChange($event)" @input="updateValue($event)" class="nvw-list-picker">
        <option v-for="(item, index) in items"
                v-bind:item="item"
                v-bind:index="index"
                v-bind:key="index"
                :value="item"
                :selected="selectedIndex === index">
            {{ item }}
        </option>
    </select>
</template>

<script>

export default {
    name: 'ListPicker',
    props: {
        items: {
            type: Array
        },
        selectedIndex: {
            type: Number,
            default: 0
        }
    },
    methods: {
        updateValue: function (event) {
            this.$emit('input', event.target.selectedIndex);
        },
        onSelectedIndexChange: function (event) {
            this.$emit('selectedIndexChange', event);
        },
    },
};
</script>

<style lang="scss" scoped>

</style>

