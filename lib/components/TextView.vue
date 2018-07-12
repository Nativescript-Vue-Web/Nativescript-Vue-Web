<template>
    <textarea
        ref="textview" 
        :disabled="!editable"
        :placeholder="hint"
        :maxlength="maxLength"
        :type="keyboardType"
        :value="value"
        @blur="onBlur ? onBlur($event) : null"
        @focus="focus ? focus($event) : null"
        @keyup.enter="returnPress ? returnPress($event) : null"
        @input="updateValue()"
        @change="textChange($event)"
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
        'onBlur',
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
            this.$emit('input', {
                text: this.$refs.textview.value,
            });
        },
    },
};
</script>

