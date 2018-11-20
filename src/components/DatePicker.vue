<template>
    <input
        class="nvw-datepicker"
        type="date"
        :max="maxDateValue"
        :min="minDateValue"
        :value="dateValue"
        @input="updateValue($event)"
    />
</template>

<script>
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'DatePicker',
  model: {
    event: 'dateChange',
    prop: 'value',
  },
  props: {
    date: Date,
    minDate: Date,
    maxDate: Date,
    day: Number,
    month: Number,
    year: Number,
    value: Date,
  },
  data() {
    return {
      dayValue: Number,
      monthValue: Number,
      yearValue: Number,
    };
  },
  computed: {
    minDateValue: function() {
      return this.minDate ? this.dateToString(this.minDate) : '';
    },
    maxDateValue: function() {
      return this.maxDate ? this.dateToString(this.maxDate) : '';
    },
    dateValue: function() {
      if (this.date) {
        const date = new Date(Date.parse(this.date));
        return this.dateToString(date);
      } else if (this.value) {
        const date = new Date(Date.parse(this.value));
        return this.dateToString(date);
      } else {
        const day = this.day ? this.addZero(this.day) : this.addZero(new Date().getUTCDate());
        const month = this.month ? this.addZero(this.month) : this.addZero(new Date().getUTCMonth() + 1);
        const year = this.year ? this.year : new Date().getUTCFullYear();
        return `${year}-${month}-${day}`;
      }
    },
  },
  methods: {
    updateValue: function(event) {
      this.dateChange(event.target.value);
    },
    addZero: function(value) {
      return value.toString().padStart(2, '0');
    },
    dateToString(dateValue) {
      const date = new Date(Date.parse(dateValue));
      return `${date.getUTCFullYear()}-${this.addZero(date.getUTCMonth() + 1)}-${this.addZero(date.getUTCDate())}`;
    },
    dateChange(date) {
      const splitDate = date.split('-');
      if (splitDate.length === 3) {
        this.$emit('dateChange', new Date(splitDate[0], parseInt(splitDate[1]) - 1, parseInt(splitDate[2]) + 1));
      }
    },
  },
  watch: {
    dateValue: function(event) {
      this.dateChange(event);
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
