<template>
    <input
        class="nvw-timepicker"
        type="time"
        :min="getMinTime"
        :max="getMaxTime"
        :value="timeValue"
        @change="onTimeChange($event)"
        @input="updateValue($event)"
    />
</template>

<script>
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'TimePicker',
  props: {
    hour: Number,
    minute: Number,
    time: Date,
    minHour: Number,
    maxHour: Number,
    minMinute: Number,
    maxMinute: Number,
    minuteInterval: Number, // Step, the equivalence of minuteInterval prop, has some strange effects across browsers, so is not completely reliable.
    value: [Date, String],
  },
  computed: {
    // Min and Max values are needed to be improved.
    getMinTime: function() {
      const minHour = this.minHour ? this.minHour : '00';
      const minMinute = this.minMinute ? this.minMinute : '00';
      return this.timeToString(minHour, minMinute);
    },
    getMaxTime: function() {
      const maxHour = this.maxHour ? this.maxHour : '23';
      const maxMinute = this.maxMinute ? this.maxMinute : '59';
      return this.timeToString(maxHour, maxMinute);
    },
    timeValue: function() {
      if (this.time) {
        const time = new Date(this.time);
        return this.timeToString(time.getHours(), time.getMinutes());
      } else if (this.hour != null && this.minute != null) {
        return this.timeToString(this.hour, this.minute);
      } else if (this.value) {
        if (this.value instanceof Date) {
          const time = new Date(this.value);
          return this.timeToString(time.getHours(), time.getMinutes());
        }
        return this.value;
      }
      return '';
    },
  },
  methods: {
    updateValue: function(event) {
      this.$emit('input', event.target.value);
    },
    onTimeChange: function(event) {
      this.$emit('timeChange', event);
    },
    timeToString: function(hour, minute) {
      return hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0');
    },
  },
  watch: {
    timeValue: function(event) {
      this.$emit('timeChange', event);
    },
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.nvw-timepicker {
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #fff;
  padding: 3px 5px;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);
}
</style>
