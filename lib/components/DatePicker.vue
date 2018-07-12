<template>
    <input
        ref="datepicker"
        :max="maxDate" 
        :min="minDate" 
        @change="dateChange ? dateChange($event) : null"
        type="date"
        :value="value"
        @input="updateValue()"
    />
</template>

<script>
export default {
    name: 'DatePicker',
    props: [
        'day',
        'month',
        'year',
        'minDate',
        'maxDate',
        'dateChange',
        'value',
    ],
    computed: {
        calcDate: function () {
            console.log('calcDate');
            console.log(this.$refs.datepicker.value);
            if(this.year && this.month && this.day) {
                return this.year.concat('-').concat(this.month).concat('-').concat(this.day);
            }
            return new Date().toISOString().replace(/T.*/,'').split('-').join('-');
        },
    },
    methods: {
        updateValue: function () {
            this.$emit('input', this.$refs.datepicker.value);
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
  box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);
  width: 190px;
}
</style>
