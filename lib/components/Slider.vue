<template>
    <div class="nvw-sliderContainer">
        <input
            ref="slider"
            class="nvw-slider"
            type="range"
            :min="minValue"
            :max="maxValue"
            :value="value"
            @input="updateValue()"
            @change="onValueChange($event)"
        />
    </div>
</template>

<script>
export default {
    name: 'Slider',
    props: [
        'minValue',
        'maxValue',
        'valueChange', // an event.
        'value',
    ],
    methods: {
        updateValue: function () {
            this.$emit('input', this.$refs.slider.value);
        },
        onValueChange: function (event) {
            this.$emit('valueChange', event);
        },
    },
};
</script>

<style lang="scss" scoped>
.nvw-sliderContainer {
    width: 100%;

    & .nvw-slider {
        -webkit-appearance: none;
        width: 100%;
        height: 25px;
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
    }

    & .nvw-slider:hover {
        opacity: 1;
    }

    & .nvw-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        background: #4CAF50;
        cursor: pointer;
    }

    & .nvw-slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        background: #4CAF50;
        cursor: pointer;
    }   
}
</style>
