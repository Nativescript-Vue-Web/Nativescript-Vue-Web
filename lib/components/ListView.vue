<template>
  <div>
    <div 
      v-for="item in items" 
      :key="item[valueProp]">
      <Label :text="item[labelProp]" />
      <hr style="background-color: red; height: 1px; border: 0;" >
    </div>
  </div>
</template>

<script>
export default {
    name: "ListView",
    props: [
        "items",
        "separatorColor",
        "valueProp",
        "labelProp",
    ],
};
</script>

<style lang="scss" scoped>

</style>
