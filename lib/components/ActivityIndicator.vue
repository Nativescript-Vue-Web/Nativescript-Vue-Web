<template>
    <label v-show="busy">
        <slot></slot>
    </label>
</template>

<script>
export default {
    name: 'ActivityIndicator',
    props: [
        'busy',
        'busyChange', // an event.
    ],
    computed: {
        busy: function () {
            this.$emit('busyChange');
        },
    },
};
</script>

<style lang="scss" scoped>

</style>
