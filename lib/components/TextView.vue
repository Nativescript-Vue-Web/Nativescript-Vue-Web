<template>
    <textarea 
        :disabled="!editable"
        :placeholder="hint"
        :value="text"
        :model="model"
        :maxlength="maxLength"
        :type="keyboardType"
        @blur="onBlur($event)"
        @focus="focus($event)"
        @keyup.enter="returnPress($event)"
        @input="textChange($event)"
    />
</template>

<script>
export default {
    name: 'TextView',
    props: [
        'text',
        'hint',
        'model',
        'editable',
        'maxLength',
        'keyboardType',
        'onBlur',
        'focus',
        'returnPress',
        'textChange',
    ],
};
</script>

