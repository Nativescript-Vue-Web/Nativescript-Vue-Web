<template>
    <input 
        :placeholder="hint"
        :value="text"
        :disabled="!editable"
        :model="model"
        :maxlength="maxLength"
        :type="secure ? 'password' : keyboardType"
        @blur="onBlur($event)"
        @focus="focus($event)"
        @keyup.enter="returnPress($event)"
        @input="textChange($event)"
    />
</template>

<script>
export default {
    name: 'TextField',
    props: [
        "model",
        "maxLength",
        "keyboardType",
        "secure",
        "text",
        "hint",
        "editable",
        "onBlur",
        "focus",
        "returnPress",
        "textChange"
    ],
};
</script>

<style scoped lang="scss">

</style>