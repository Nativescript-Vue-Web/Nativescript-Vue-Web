<template>
    <input
        ref="textfield" 
        :placeholder="hint"
        :disabled="!editable"
        :maxlength="maxLength"
        :type="secure ? 'password' : keyboardType"
        :value="value"
        @blur="onBlur ? onBlur($event) : null"
        @focus="focus ? focus($event) : null"
        @keyup.enter="returnPress ? returnPress($event) : null"
        @change="textChange ? textChange($event) : null"
        @input="updateValue()"
    />
</template>

<script>
export default {
    name: 'TextField',
    props: [
        'maxLength',
        'keyboardType',
        'secure',
        'text',
        'hint',
        'editable',
        'onBlur',
        'focus',
        'returnPress',
        'textChange',
        'value',
    ],
    methods: {
        updateValue: function () {
            this.$emit('input', this.$refs.textfield.value);
        },
    },
};
</script>

<style scoped lang="scss">

</style>