<template>
    <select :value="value" ref="listpicker" @change="onSelectedIndexChange($event)" @input="updateValue()">
        <option v-if="disabledVal" disabled :value="disabledVal">{{ disabledVal }}</option>
        <option v-for="item in items" :key="item[valueProp]" :value="item[valueProp]">
                {{ item[labelProp] }}
        </option>
    </select>
</template>

<script>

export default {
    name: 'ListPicker',
    props: [
        'disabledVal', // Works only in web.
        'items',
        'valueProp',
        'labelProp',
        'selectedIndex',
        'selectedIndexChange', // an event.
        'value',
    ],
    methods: {
        updateValue: function () {
            this.$emit('input', parseInt(this.$refs.listpicker.value));
        },
        onSelectedIndexChange: function (event) {
            this.$emit('selectedIndexChange', event);
        },
    },
};
</script>

<style lang="scss" scoped>

</style>

