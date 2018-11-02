<template>
    <input
        class="nvw-datepicker"
        type="date"
        :max="maxDate"
        :min="minDate"
        :value="dateValue"
        @change="$emit('dateChange', $event)"
        @input="updateValue($event)"
    />
</template>

<script>
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'DatePicker',
  props: {
    date: [Date, String],
    minDate: Date,
    maxDate: Date,
    day: Number,
    month: Number,
    year: Number,
  },
  computed: {
    dateValue: function() {
      if (this.date) {
        const day = this.dateToString(this.date.getUTCDate());
        const month = this.dateToString(this.date.getUTCMonth() + 1);
        const year = this.date.getUTCFullYear();

        //this.$emit('input', new Date(day, month, year));
        return `${year}-${month}-${day}`;
      } else {
        const day = this.day ? this.dateToString(this.day) : this.dateToString(new Date().getUTCDate());
        const month = this.month ? this.dateToString(this.month) : this.dateToString(new Date().getUTCMonth() + 1);
        const year = this.year ? this.year : new Date().getUTCFullYear();

        //this.$emit('input', new Date(day, month, year));
        return `${year}-${month}-${day}`;
      }
    },
  },
  methods: {
    updateValue: function(event) {
      const splitDate = event.target.value.split('-');
      this.$emit('input', new Date(splitDate[0], parseInt(splitDate[1]) - 1, parseInt(splitDate[2]) + 1));
    },
    dateToString: function(value) {
      return value.toString().padStart(2, '0');
    },
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.nvw-datepicker {
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #fff;
  padding: 3px 5px;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);
  width: 190px;
}
</style>
