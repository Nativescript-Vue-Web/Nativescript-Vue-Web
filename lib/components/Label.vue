<template>
      <label :value="text"> </label>
   
</template>

<script>
export default {
    name: 'Label',
    props: {
        text: String,
        textWrap: Boolean, // TODO
    },  
};
</script>

<style scoped lang='scss'>

</style>
