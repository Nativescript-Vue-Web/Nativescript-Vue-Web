<template>
    <input 
        :max="maxDate" 
        :min="minDate" 
        @change="dateChange($event)" 
        :value="calcDate" 
        type="date"
    />
</template>

<script>
export default {
    name: 'DatePicker',
    props: [
        'model',
        'day',
        'month',
        'year',
        'minDate',
        'maxDate',
        'dateChange'
    ],
    computed: {
        calcDate: function () {
            if(this.year != undefined && this.month != undefined && this.day != undefined) {
                return this.year.concat('-').concat(this.month).concat('-').concat(this.day);
            }
            return new Date().toISOString().replace(/T.*/,'').split('-').join('-');
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
