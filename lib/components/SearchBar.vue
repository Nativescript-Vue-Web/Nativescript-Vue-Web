<template>
    <div class="searchBarContainer">
        <img class="searchIcon" src="https://image.flaticon.com/icons/png/128/61/61088.png" />
        <input
            ref="searchbar"
            class="searchBar"
            hint="search"
            :type="keyboardType" 
            :maxlength="maxlength" 
            :editable="true"
            :value="value"
            @keyup.enter="onSubmit($event)"
            @input="updateValue()"
            @change="onTextChange($event)"
            
        />
        <img @click="onClear($event)" class="clearIcon" src="https://cdn.iconscout.com/public/images/icon/premium/png-256/close-delete-remove-31c54d9a6e2c1e99-256x256.png" />
    </div>
</template>

<script>
import TextField from './TextField';

export default {
    name: 'SearchBar',
    props: [
        'maxlength',
        'keyboardType',
        'submit',
        'clear',
        'textChange',
        'value',
    ],
    components: {
        TextField,
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
    .searchBarContainer {
        flex-direction: row;
        justify-content: flex-end;
        position: relative;
        width: 400px;
        margin: 0;
        padding: 0;
        align-items: stretch;
        .searchBar {
            width: 70%;
            height: 30px;
            padding-left: 40px;
            margin: 4px 10px 0 10px;
            text-align: left;
            font-weight: bold;
        }
        .searchIcon {
            height: 24px;
            width: 24px;
            bottom: 4px;
            left: 15px;
            position: absolute;
        }
        .clearIcon {
            position: absolute;
            height: 24px;
            width: 24px;
            bottom: 4px;
            right: 75px;
        }
    }
    
</style>
