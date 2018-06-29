<template>
    <div class="searchBarContainer">
        <img src="https://image.flaticon.com/icons/png/128/61/61088.png" class="material-icons" />
        <TextField class="searchBar" text="search" :maxlength="maxlength" :model="model" :type="keyboardType" />
    </div>
</template>

<script>
import TextField from "./TextField";

export default {
    name: "SearchBar",
    props: [
        "model",
        "maxlength",
        "keyboardType"
    ],
    components: {
        TextField,
    },
};
</script>

<style lang="scss" scoped>
    .searchBarContainer {
        flex-direction: row;
        justify-content: center;
        position: relative;
        direction: ltr;
        img {
            height: 24px;
            width: 24px;
            bottom: 4px;
            left: 15px;
            position: absolute;
        }
        .searchBar {
            width: 20%;
            height: 30px;
            padding-left: 40px;
            margin: 4px 10px 0 10px;
            text-align: left;
            font-weight: bold;
        }
    }
</style>
