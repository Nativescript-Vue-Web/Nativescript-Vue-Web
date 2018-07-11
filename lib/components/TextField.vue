<template>
    <input 
        :placeholder="hint"
        :value="text"
        :disabled="!editable"
        :model="model"
        :maxlength="maxLength"
        :type="secure ? 'password' : keyboardType"
        @blur="onBlur ? onBlur($event) : null"
        @focus="focus ? focus($event) : null"
        @keyup.enter="returnPress ? returnPress($event) : null"
        @input="textChange ? textChange($event) : null"
    />
</template>

<script>
export default {
    name: 'TextField',
    props: [
        'model',
        'maxLength',
        'keyboardType',
        'secure',
        'text',
        'hint',
        'editable',
        'onBlur',
        'focus',
        'returnPress',
        'textChange'
    ],
};
</script>

<style scoped lang="scss">

</style>