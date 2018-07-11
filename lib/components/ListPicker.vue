<template>
    <select @input="selectedIndexChange($event)" :model="selectedIndex">
        <option disabled :value="disabledVal">{{ disabledVal }}</option>
        <option v-for="item in items" v-bind:key="item[valueProp]" v-bind:value="selectedIndex">
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
        'value',
        'valueProp',
        'labelProp',
        'selectedIndex',
        'selectedIndexChange', // an event.
    ],
};
</script>

<style lang="scss" scoped>

</style>

