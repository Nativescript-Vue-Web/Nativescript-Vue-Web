<template>
    <input
        class="nvw-datepicker"
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
    props: {
        date: Date,
        minDate: Date,
        maxDate: Date,
        day: Number,
        month: Number,
        year: Number,
        value: Date
    },
    methods: {
        updateValue: function () {
            this.$emit('input', this.$refs.datepicker.value);
        },
        onDateChange: function (event) {
            this.$emit('dateChange', event);
        },
    },
};
</script>

<style lang="scss" scoped>
.nvw-datepicker {
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #fff;
  padding: 3px 5px;
  box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);
  width: 190px;
}
</style>
