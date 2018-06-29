<template>
    <input :placeholder="text" :model="model" :maxlength="maxLength" :type="secure ? 'password' : keyboardType" />
</template>

<script>
export default {
    name: "TextField",
    props: [
        "model",
        "maxLength",
        "keyboardType",
        "secure",
        "text",
    ],
};
</script>

<style scoped lang="scss">

</style>