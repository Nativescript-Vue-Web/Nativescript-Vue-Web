<template>
    <div class="slidecontainer">
        <input v-on:input="valueChange($event)" type="range" :min="minValue"
               :max="maxValue" :value="value" class="slider" id="myRange" />
    </div>
</template>

<script>
export default {
  name: 'Slider',
  props: [
    'value',
    'model', // using :model="model" could not succeed to update the value. the value can be updated using the valueChange event: this.value = event.target.value;
    'minValue',
    'maxValue',
    'valueChange', // an event.
  ],
};
</script>

<style lang="scss" scoped>
.slidecontainer {
    width: 100%;
}

.slider {
    -webkit-appearance: none;
    width: 100%;
    height: 25px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider:hover {
    opacity: 1;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #4CAF50;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #4CAF50;
    cursor: pointer;
}
</style>
