<template>
    <input
      class="nvw-datepicker"
      type="date"
      :max="maxDate"
      :min="minDate"
      :value="date"
      @change="$emit('dateChange')"
      @input="updateValue"
    />
</template>

<script>
export default {
  name: 'DatePicker',
  model: {
    event: 'input',
    prop: 'date',
  },
  props: {
    date: [Date, String],
    minDate: Date,
    maxDate: Date,
    day: Number,
    month: Number,
    year: Number,
  },
  methods: {
    updateValue: function(event) {
      this.$emit('input', new Date(event.target.value).toISOString().split('T', 1)[0]);
    },
  },
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
