<template>
    <input
        class="nvw-timepicker"
        type="time"
        :min="getMinTime"
        :max="getMaxTime"
        :value="value"
        @change="onTimeChange($event)"
        @input="updateValue($event)"
    />
</template>

<script>
export default {
  name: 'TimePicker',
  props: [
    'hour',
    'minute',
    'minHour',
    'maxHour',
    'minMinute',
    'maxMinute',
    'minuteInterval', // Step, the equivalence of minuteInterval prop, has some strange effects across browsers, so is not completely reliable.
    'timeChange',
    'value',
  ],
  computed: {
    // Min and Max values are needed to be improved.
    getMinTime: function() {
      const minHour = this.minHour ? this.minHour : '00';
      const minMinute = this.minMinute ? this.minMinute : '00';
      return minHour + ':' + minMinute;
    },
    getMaxTime: function() {
      const maxHour = this.maxHour ? this.maxHour : '23';
      const maxMinute = this.maxMinute ? this.maxMinute : '59';
      return maxHour + ':' + maxMinute;
    },
  },
  methods: {
    updateValue: function(event) {
      this.$emit('input', event.target.value);
    },
    onTimeChange: function(event) {
      this.$emit('timeChange', event);
    },
  },
};
</script>

<style lang="scss" scoped>
.nvw-timepicker {
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #fff;
  padding: 3px 5px;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);
}
</style>
