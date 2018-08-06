<template>
    <div :style="{backgroundColor: textFieldBackgroundColor}" class="nvw-searchbar">
        <span @click="onSubmit($event)" class="nvw-searchbar__searchIcon" />
        <input
            ref="searchbar"
            class="nvw-searchbar__searchInput"
            :placeholder="hint"
            :type="keyboardType"
            :value="text"
            @keyup.enter="onSubmit($event)"
            @input="updateValue()"
            @change="onTextChange($event)"
        />
        <span @click="onClear($event)" class="nvw-searchbar__clearIcon" />
    </div>
</template>

<script>
export default {
    model: {
        event: 'input',
        prop: 'text',
    },
    name: 'SearchBar',
    props: {
        keyboardType: String,
        hint: String,
        text: String,
        textFieldBackgroundColor: String,
        textFieldHintColor: String, // TODO
    },
    methods: {
        updateValue: function () {
            this.$emit('input', this.$refs.searchbar.value);
        },
        onTextChange: function (event) {
            this.$emit('textChange', event);
        },
        onSubmit: function (event) {
            this.$emit('submit', event);  
        },
        onClear: function (event) {
            this.$emit('clear', event);
        },
    },
};
</script>

<style lang="scss" scoped>
    .nvw-searchbar {
        flex-direction: row;
        justify-content: flex-end;
        position: relative;
        width: 400px;
        margin: 0;
        padding: 0;
        padding-bottom: 4px;

        .nvw-searchbar__searchInput {
            width: calc(100% - 98px);
            height: 30px;
            padding: 0px 40px 0px 40px;
            margin: 4px 10px 0px 7px;
            background-size: cover;
            text-align: left;
            font-weight: bold;
        }

        .nvw-searchbar__searchIcon {
            background: url('https://image.flaticon.com/icons/png/128/61/61088.png');
            height: 24px;
            width: 24px;
            bottom: 10px;
            background-size: cover;
            left: 15px;
            position: absolute;
        }

        .nvw-searchbar__clearIcon {
            background: url('https://cdn.iconscout.com/public/images/icon/premium/png-256/close-delete-remove-31c54d9a6e2c1e99-256x256.png');
            position: absolute;
            height: 24px;
            background-size: cover;
            width: 24px;
            bottom: 10px;
            right: 15px;
        }
    }
</style>
