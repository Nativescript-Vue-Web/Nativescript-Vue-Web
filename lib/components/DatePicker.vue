<template>
    <input
        ref="datepicker"
        type="date"
        :max="maxDate"
        :min="minDate"
        :value="value"
        @change="onDateChange($event)"
        @input="updateValue()"
    />
</template>

<script>
export default {
  name: 'DatePicker',
  props: ['day', 'month', 'year', 'minDate', 'maxDate', 'dateChange', 'value'],
  computed: {
    calcDate: function() {
      if (this.year && this.month && this.day) {
        return this.year
          .concat('-')
          .concat(this.month)
          .concat('-')
          .concat(this.day);
      }
      return new Date()
        .toISOString()
        .replace(/T.*/, '')
        .split('-')
        .join('-');
    },
  },
  methods: {
    updateValue: function() {
      this.$emit('input', this.$refs.datepicker.value);
    },
    onDateChange: function(event) {
      this.$emit('dateChange', event);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #fff;
  padding: 3px 5px;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);
  width: 190px;
}
</style>
