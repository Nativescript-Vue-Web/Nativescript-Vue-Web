<template>
    <textarea
        ref="textview" 
        :disabled="!editable"
        :placeholder="hint"
        :maxlength="maxLength"
        :type="keyboardType"
        :value="value"
        @blur="onBlur($event)"
        @focus="onFocus($event)"
        @keyup.enter="onReturnPress($event)"
        @change="onTextChange($event)"
        @input="updateValue()"
    />
</template>

<script>
export default {
    name: 'TextView',
    props: [
        'text',
        'hint',
        'editable',
        'maxLength',
        'keyboardType',
        'blur',
        'focus',
        'returnPress',
        'textChange',
        'value'
    ],
    computed: {
        replaceWithCarriageReturn: function () {
            // do smt...
            return this.text;
        }
    },
    methods: {
        updateValue: function () {
            this.$emit('input', this.$refs.textview.value);
        },
        onBlur: function (event) {
            this.$emit('blur', event);  
        },
        onFocus: function (event) {
            this.$emit('focus', event);
        },
        onTextChange: function (event) {
            this.$emit('textChange', event);
        },
        onReturnPress: function (event) {
            this.$emit('returnPress', event);
        },
    },
};
</script>

